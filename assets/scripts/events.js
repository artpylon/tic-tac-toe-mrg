'use strict'

const getFormFields = require(`../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
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
  const checkGame = function () {
    if (isGameOver() === true) {
      // end the game..
    } else // update the game
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

const isGameOver = function () {
  if (store.game.cells[0] + store.game.cells[1] + store.game.cells[2] === 'xxx' || 'ooo') {
    store.game.over = true
    return true
  } else if (store.game.cells[3] + store.game.cells[4] + store.game.cells[5] === 'xxx' || 'ooo') {
    store.game.over = true
    return true
  } else if (store.game.cells[6] + store.game.cells[7] + store.game.cells[8] === 'xxx' || 'ooo') {
    store.game.over = true
    return true
  } else if (store.game.cells[0] + store.game.cells[3] + store.game.cells[9] === 'xxx' || 'ooo') {
    store.game.over = true
    return true
  } else if (store.game.cells[1] + store.game.cells[4] + store.game.cells[7] === 'xxx' || 'ooo') {
    store.game.over = true
    return true
  } else if (store.game.cells[0] + store.game.cells[3] + store.game.cells[9] === 'xxx' || 'ooo') {
    store.game.over = true
    return true
  } else if (store.game.cells[2] + store.game.cells[5] + store.game.cells[8] === 'xxx' || 'ooo') {
    store.game.over = true
    return true
  } else if (store.game.cells[0] + store.game.cells[4] + store.game.cells[8] === 'xxx' || 'ooo') {
    store.game.over = true
    return true
  } else if (store.game.cells[0] + store.game.cells[3] + store.game.cells[9] === 'xxx' || 'ooo') {
    store.game.over = true
    return true
  } else return false
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
