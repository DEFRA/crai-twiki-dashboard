const Joi = require('joi')

const schema = Joi.object({
  baseUrl: Joi.string().required()
})

const config = {
  baseUrl: process.env.API_BASE_URL
}

const { error, value } = schema.validate(config, { abortEarly: false })

if (error) {
  throw new Error(`The api config is invalid. ${error.message}`)
}

module.exports = value
