const { parseJSON } = require("date-fns")
const { getProjectOverview } = require('./api/project')
const data = require('./data')

const modelCost = data.model_cost

const parseDate = (date) => {
  return parseJSON(date).toDateString()
}

const calculateModelCost = (modelName, numberOfTokens) => {
  const cost = modelCost.find(model => model.model_name.toLocaleLowerCase() === modelName.toLocaleLowerCase())
  const calculateCost = numberOfTokens * cost.cost_per_token
  return calculateCost
}

const calculateSessionTraceTotal = (sessions) => {
  const totals = sessions.reduce((acc, curr) => {
    acc.session_count += parseInt(curr.session_count, 10)
    acc.thread_count += parseInt(curr.thread_count, 10)
    return acc
  }, { session_count: 0, thread_count: 0 })

  return totals
}

const calculateTotalTokens = (modelsUsage) => {
  return modelsUsage.reduce((acc, curr) => {
    acc.total_tokens += parseInt(curr.total_tokens, 10)
    acc.total_model_cost += curr.model_cost
    return acc
  }, { total_tokens: 0, total_model_cost: 0 })
}

const calculateTotalModelUsagebyModel = (modelsUsage) => {
  const modelTotals = modelsUsage.reduce((acc, curr) => {
    const model = curr.model
    if (!acc[model]) {
      acc[model] = { total_tokens: 0, total_model_cost: 0 }
    }
    acc[model].total_tokens += parseInt(curr.total_tokens, 10)
    return acc
  }, {})
  return Object.keys(modelTotals).map(model => ({
    model,
    total_tokens: modelTotals[model].total_tokens,
    model_cost: calculateModelCost(model, modelTotals[model].total_tokens)
  }))
}

const sessionGraphData = (sessions) => {
  return sessions.map(session => {
    return {
      label: parseDate(session.date),
      value: parseInt(session.session_count)
    }
  })
}

const threadGraphData = (sessions) => {
  return sessions.map(session => {
    return {
      label: parseDate(session.date),
      value: parseInt(session.thread_count)
    }
  })
}

const modelTokenGraphData = (modelsUsage, valueToUse) => {
  const groupedData = modelsUsage.reduce((acc, model) => {
    if (!acc[model.model]) {
      acc[model.model] = []
    }
    acc[model.model].push({
      label: parseDate(model.date),
      value: parseInt(model.total_tokens)
    });
    return acc
  }, {})

  return Object.keys(groupedData).map(key => ({
    model: key,
    data: groupedData[key]
  }))
}

const modelCostGraphData = (modelsUsage) => {
  const costModel = modelsUsage.map(model => {
    return {
      model: model.model,
      label: parseDate(model.date),
      value: calculateModelCost(model.model, model.total_tokens)
    }
  })

  const groupedData = costModel.reduce((acc, model) => {
    if (!acc[model.model]) {
      acc[model.model] = []
    }
    acc[model.model].push({
      label: model.label,
      value: model.value
    });
    return acc
  }, {})

  return Object.keys(groupedData).map(key => ({
    model: key,
    data: groupedData[key]
  }))
}

const loadDashboard = async (projectId) => {
  const projectOverview = await getProjectOverview(projectId)
  const totals = calculateSessionTraceTotal(projectOverview.sessions)
  const model_usage = calculateTotalModelUsagebyModel(projectOverview.model_usage)
  const model_usage_totals = calculateTotalTokens(model_usage)
  totals.token_count = model_usage_totals.total_tokens
  totals.model_cost = model_usage_totals.total_model_cost
  return {
    id: projectOverview.project[0].id,
    name: projectOverview.project[0].name,
    modelsUsage: calculateTotalModelUsagebyModel(projectOverview.model_usage),
    modelTokenGraphData: modelTokenGraphData(projectOverview.model_usage),
    modelCostGraphData: modelCostGraphData(projectOverview.model_usage),
    sessionGraphData: sessionGraphData(projectOverview.sessions),
    threadGraphData: threadGraphData(projectOverview.sessions),
    totals
  }
}

module.exports = loadDashboard
