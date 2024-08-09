const routes = [].concat(
  require('../routes/home'),
  require('../routes/healthy'),
  require('../routes/healthz'),
  require('../routes/static'),
  require('../routes/sessions'),
  require('../routes/threads'),
  require('../routes/steps'),
  require('../routes/step')
)

module.exports = {
  plugin: {
    name: 'router',
    register: (server, options) => {
      server.route(routes)
    }
  }
}
