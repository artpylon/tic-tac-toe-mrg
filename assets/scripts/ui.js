'use strict'
const api = require('./api')
const events = require('./events')

const signUpSuccess = (data) => {
  $('#sign-up').hide()
  $('#sign-in').hide()
}
const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  $('#sign-up').hide()
  $('#sign-in').hide()
}
const signInFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (data) => {
  // don't leave this in your production application.
  // instead manipulate the DOM
  console.log(data)
}
const changePasswordFailure = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure
}
