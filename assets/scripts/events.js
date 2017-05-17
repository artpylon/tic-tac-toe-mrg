'use strict'

const getFormFields = require(`../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const events = require('./events')
const store = require('./store')

// Authentication
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
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const showChangePassword = function (event) {
  $('#change-password').show()
}

// Game
const onStartGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.startGame(data)
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}

const onSelectTile = function (event) {
  console.log('this is the tile event ', event)
  console.log('this is the store at select tile ', store)
  event.preventDefault()
  const data = getFormFields(event.target)
  store.game.cell.index = event.target.dataid
  turn()
  api.updateGame(data)
    .then(ui.selectTileSuccess)
    .catch(ui.selectTileFailure)
  store.xTurn = !store.xTurn
  console.log(store.xTurn)
}

const turn = function () {
  if (store.xTurn === true) {
    store.game.cell.value = 'x'
  } else store.game.cell.value = 'o'
}

const addHandlers = () => {
  // Authentication
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('.signout-button').on('click', onSignOut)
  $('#changepwbutton').on('click', showChangePassword)
  // Game
  $('.startgame').on('click', onStartGame)
  $('.tile').on('click', onSelectTile)
}

module.exports = {
  addHandlers
}
