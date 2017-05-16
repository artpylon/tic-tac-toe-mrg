'use strict'
const api = require('./api')
const events = require('./events')

const signUpSuccess = (data) => {
  $('#sign-up').hide()
  $('.errormsg').hide()
}
const signUpFailure = (error) => {
  $('.errormsg').hide()
  $('#sign-up').after('<p>Sign up failed. Please check your email and passwords.</p>')
  $('p').addClass('errormsg')
}

const signInSuccess = (data) => {
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.errormsg').hide()
  $('.signout-button').show()
  $('#changepwbutton').show()
}
const signInFailure = (error) => {
  $('.errormsg').hide()
  $('#sign-in').after('<p>Sign in failed. Please check your email and password.</p>')
  $('p').addClass('errormsg')
}

const changePasswordSuccess = (data) => {
  console.log('success')
  $('#change-password').hide()
  $('.errormsg').hide()
  $('.changepw-success').text('Password has been changed.')
}
const changePasswordFailure = (error) => {
  $('#change-password').after('<p>Change password failed. Please check your passwords.</p>')
}

const signOutSuccess = (data) => {
  console.log('success')
  $('.signout-button').hide()
  $('#change-password').hide()
  $('#changepwbutton').hide()
  $('.errormsg').hide()
  $('#sign-up').show()
  $('#sign-in').show()
}
const signOutFailure = (error) => {
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
