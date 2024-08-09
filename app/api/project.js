const { get } = require('./base')
const config = require('../config/api')

const baseUrl = config.baseUrl

const getProjects = async () => {
  return get(`${baseUrl}/project`)
}

const getProject = async (id) => {
  return get(`${baseUrl}/project/${id}`)
}

const getProjectOverview = async (id) => {
  return get(`${baseUrl}/project/${id}/overview`)
}

module.exports = {
  getProjects,
  getProject,
  getProjectOverview
}
