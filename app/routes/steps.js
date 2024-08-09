const { getThread } = require('../api/thread')

module.exports = {
  method: 'GET',
  path: '/project/thread/{threadId}',
  options: {
    handler: async (request, h) => {
      const thread = await getThread(request.params.threadId)
      return h.view('steps', { thread })
    }
  }
}
