const { get } = require('./base')
const config = require('../config/api')

const baseUrl = config.baseUrl

const getStep = async (id) => {
  return get(`${baseUrl}/step/${id}`)
}

module.exports = {
  getStep
}
