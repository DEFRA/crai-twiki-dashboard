const { getStep } = require('../api/step')

module.exports = {
  method: 'GET',
  path: '/project/step/{stepId}',
  options: {
    handler: async (request, h) => {
      const step = await getStep(request.params.stepId)
      return h.view('step', { step })
    }
  }
}
