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
    // .then(api.getGames(data))
    // .then(ui.getGamesSuccess)
    // .catch(ui.getGamesFailure)
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
  event.preventDefault()
  const data = getFormFields(event.target)
  store.game.cell = {}
  store.game.cell.index = this.dataset.id
  turn()
  store.moves++
  $(this).text(store.game.cell.value)
  $(this).off()
  api.updateGame(data)
    .then(ui.selectTileSuccess)
    .catch(ui.selectTileFailure)
  store.xTurn = !store.xTurn
  console.log('store after select tile is done ', store)
}

const turn = function () {
  if (store.xTurn === true) {
    store.game.cell.value = 'x'
  } else store.game.cell.value = 'o'
}

// const displayGameResult = function (data) {
//   if (store.game.over === false) {
//     api.updateGame(data)
//       .then(ui.selectTileSuccess)
//       .catch(ui.selectTileFailure)
//   } else {
//     api.updateGame(data)
//       .then(ui.endGameSuccess)
//       .catch(ui.endGameFailure)
//   }
// }

const gameOver = function () {
  if (store.game.over === true) {
    gameOverUI()
  }
}

const resetBoard = function () {
}

const addHandlers = () => {
  // Authentication
  $('#zero').data('id', 0)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('.signout-button').on('click', onSignOut)
  $('#changepwbutton').on('click', showChangePassword)
  // Game
  $('.startgame').on('click', onStartGame)
  $('#zero').on('click', onSelectTile)
  $('#one').on('click', onSelectTile)
  $('#two').on('click', onSelectTile)
  $('#three').on('click', onSelectTile)
  $('#four').on('click', onSelectTile)
  $('#five').on('click', onSelectTile)
  $('#six').on('click', onSelectTile)
  $('#seven').on('click', onSelectTile)
  $('#eight').on('click', onSelectTile)
  $('.resetgame').on('click', resetBoard)
}

module.exports = {
  addHandlers
}
