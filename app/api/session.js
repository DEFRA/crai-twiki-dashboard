const { get } = require('./base')
const config = require('../config/api')

const baseUrl = config.baseUrl

const getSession = (id) => {
  return get(`${baseUrl}/session/${id}`)
}

module.exports = {
  getSession
}
