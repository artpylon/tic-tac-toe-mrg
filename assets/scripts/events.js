'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

// event.target must be a form
const onSignUp = function (event) {
  // prefer 'event.target' over 'this'
  // ALWAYS
  event.preventDefault()
  const data = getFormFields(event.target)
// initiates an HTTP request that was defined in the api module as "signUp"
  api.signUp(data) // passing credentials to the ajax call
    .then(ui.signUpSuccess) // using a Promise to ensure order of execution
    // .then(signIn) - so you dont have two steps, create account and then signIn
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  // prefer 'event.target' over 'this'
  // ALWAYS
  event.preventDefault()
  const data = getFormFields(event.target)
// initiates an HTTP request that was defined in the api module as "signUp"
  api.signIn(data) // passing credentials to the ajax call
    .then(ui.signInSuccess) // using a Promise to ensure order of execution
    // .then(signIn) - so you dont have two steps, create account and then signIn
    .catch(ui.signInFailure)
}

const addHandlers = () => {
  // 'on ' calls the callback and passes the browser 'event' as the first argument
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
}

module.exports = {
  addHandlers
}
