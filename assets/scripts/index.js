'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
require('./events')

$(() => {
  setAPIOrigin(location, config)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
