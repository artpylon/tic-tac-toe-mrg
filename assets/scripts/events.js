'use strict'

const getFormFields = require(`../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const store = require('./store')
// Authentication
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
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
  $('.changepwmsg').hide()
  $('.errormsg').hide()
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
  $('.changepwmsg').hide()
  $('#change-password').show()
  $('#changepwbutton').hide()
}

// Game
const onStartGame = function (event) {
  $('#zero').on('click', onSelectTile)
  $('#one').on('click', onSelectTile)
  $('#two').on('click', onSelectTile)
  $('#three').on('click', onSelectTile)
  $('#four').on('click', onSelectTile)
  $('#five').on('click', onSelectTile)
  $('#six').on('click', onSelectTile)
  $('#seven').on('click', onSelectTile)
  $('#eight').on('click', onSelectTile)
  $('#change-password').hide()
  $('.changepwmsg').hide()
  $('#changepwbutton').show()
  $('.played').text(store.games.length)
  store.moves = 0
  store.xTurn = true
  event.preventDefault()
  const data = getFormFields(event.target)
  store.gamesPlayed++
  $('.played').text(store.gamesPlayed)
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
}

const turn = function () {
  if (store.xTurn === true) {
    store.game.cell.value = 'x'
  } else store.game.cell.value = 'o'
}

const onRestartGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.startGame(data)
    .then(ui.restartGameSuccess)
    .catch(ui.restartGameFailure)
}

const resetBoard = function (event) {
  store.game = {}
  store.moves = 0
  store.xTurn = true
  $('#zero').on('click', onSelectTile).text('')
  $('#one').on('click', onSelectTile).text('')
  $('#two').on('click', onSelectTile).text('')
  $('#three').on('click', onSelectTile).text('')
  $('#four').on('click', onSelectTile).text('')
  $('#five').on('click', onSelectTile).text('')
  $('#six').on('click', onSelectTile).text('')
  $('#seven').on('click', onSelectTile).text('')
  $('#eight').on('click', onSelectTile).text('')
  $('.xwin').hide()
  $('.owin').hide()
  $('.tie').hide()
  $('.restart').hide()
  $('.changepwmsg').hide()
  $('.gameboard').show()
  $('#change-password').hide()
  $('#changepwbutton').show()
  $('.speech').text('Black as midnight on a moonless night.')
  store.gamesPlayed++
  $('.played').text(store.gamesPlayed)
  onRestartGame(event)
  // api.getIndex()
  //   .then(ui.getStatsSuccess)
  //   .catch(ui.getStatsFailure)
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
  $('.restart').on('click', resetBoard)
}

module.exports = {
  addHandlers,
  onSelectTile
}
