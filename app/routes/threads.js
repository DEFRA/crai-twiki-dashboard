const { getSession } = require('../api/session')

module.exports = {
  method: 'GET',
  path: '/project/session/{id}/threads',
  options: {
    handler: async (request, h) => {
      const session = await getSession(request.params.id)
      return h.view('threads', { session })
    }
  }
}
