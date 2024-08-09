const { getProjectOverview } = require('./api/project')

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
    return acc
  }, { total_tokens: 0 })
}

const calculatTotalModelUsagebyModel = (modelsUsage) => {
  const modelTotals = modelsUsage.reduce((acc, curr) => {
    const model = curr.model
    if (!acc[model]) {
      acc[model] = { total_tokens: 0 }
    }
    acc[model].total_tokens += parseInt(curr.total_tokens, 10)
    return acc
  }, {})

  return Object.keys(modelTotals).map(model => ({
    model,
    total_tokens: modelTotals[model].total_tokens
  }))
}

const sessionGraphData = (sessions) => {
  return sessions.map(session => {
    return {
      label: session.date,
      value: parseInt(session.session_count)
    }
  })
}

const threadGraphData = (sessions) => {
  return sessions.map(session => {
    return {
      label: session.date,
      value: parseInt(session.thread_count)
    }
  })
}

const modelgraphData = (modelsUsage) => {
  return modelsUsage.map(model => {
    return {
      label: model.model,
      value: parseInt(model.total_tokens)
    }
  })
}

const loadDashboard = async (projectId) => {
  const projectOverview = await getProjectOverview(projectId)
  console.log(projectOverview)
  const totals = calculateSessionTraceTotal(projectOverview.sessions)
  totals.token_count = calculateTotalTokens(projectOverview.model_usage).total_tokens
  return {
    modelsUsage: calculatTotalModelUsagebyModel(projectOverview.model_usage),
    modelgraphData: modelgraphData(projectOverview.model_usage),
    sessionGraphData: sessionGraphData(projectOverview.sessions),
    threadGraphData: threadGraphData(projectOverview.sessions),
    totals
  }
}

module.exports = loadDashboard
