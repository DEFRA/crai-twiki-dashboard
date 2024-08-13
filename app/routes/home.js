const { getProjects, getProject } = require('../api/project')
const loadDashboard = require('../dashboard')

module.exports = {
  method: 'GET',
  path: '/',
  options: {
    handler: async (request, h) => {
      const projects = await getProjects()
      const projectId = projects[0].id
      const project = await getProject(projectId)
      const projectOverview = await loadDashboard(projectId)
      return h.view('home', { projects, project, projectOverview })
    }
  }
}
