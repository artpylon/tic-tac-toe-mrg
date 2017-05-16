'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
require('./events')

$(() => {
  setAPIOrigin(location, config)
})

require('./example')

const authEvents = require('./events.js')

// On document ready
$(() => {
  authEvents.addHandlers()
})
