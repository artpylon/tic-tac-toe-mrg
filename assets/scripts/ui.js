'use strict'
const api = require('./api')
const events = require('./events')

const signUpSuccess = (data) => {
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.signout-button').show()
  $('#changepwbutton').show()
}
const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.signout-button').show()
  $('#changepwbutton').show()
}
const signInFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (data) => {
  console.log('success')
  $('#change-password').hide()
  $('.changepw-success').text('Password has been changed.')
}
const changePasswordFailure = (error) => {
  console.error(error)
}

const signOutSuccess = (data) => {
  console.log('success')
  $('.signout-button').hide()
  $('#change-password').hide()
  $('#changepwbutton').hide()
  $('#sign-up').show()
  $('#sign-in').show()
}
const signOutFailure = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
