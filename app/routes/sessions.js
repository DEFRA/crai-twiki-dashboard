const { getProject } = require('../api/project')

module.exports = {
  method: 'GET',
  path: '/project/{id}/sessions',
  options: {
    handler: async (request, h) => {
      const project = await getProject(request.params.id)
      return h.view('sessions', { project })
    }
  }
}
