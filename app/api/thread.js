const { get } = require('./base')
const config = require('../config/api')

const baseUrl = config.baseUrl

const getThread = async (id) => {
  return get(`${baseUrl}/thread/${id}`)
}

module.exports = {
  getThread
}
