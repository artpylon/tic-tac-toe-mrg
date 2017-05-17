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

// const isGameOver = function () {
//   if (store.game.cells[0] + store.game.cells[1] + store.game.cells[2] === 'xxx' || store.game.cells[0] + store.game.cells[1] + store.game.cells[2] === 'ooo') {
//     store.game.over = true
//     return true
//   } else if (store.game.cells[3] + store.game.cells[4] + store.game.cells[5] === 'xxx' || store.game.cells[3] + store.game.cells[4] + store.game.cells[5] === 'ooo') {
//     store.game.over = true
//     return true
//   } else if (store.game.cells[6] + store.game.cells[7] + store.game.cells[8] === 'xxx' || store.game.cells[6] + store.game.cells[7] + store.game.cells[8] === 'ooo') {
//     store.game.over = true
//     return true
//   } else if (store.game.cells[0] + store.game.cells[3] + store.game.cells[6] === 'xxx' || store.game.cells[0] + store.game.cells[3] + store.game.cells[6] === 'ooo') {
//     store.game.over = true
//     return true
//   } else if (store.game.cells[1] + store.game.cells[4] + store.game.cells[7] === 'xxx' || store.game.cells[1] + store.game.cells[4] + store.game.cells[7] === 'ooo') {
//     store.game.over = true
//     return true
//   } else if (store.game.cells[2] + store.game.cells[5] + store.game.cells[8] === 'xxx' || store.game.cells[2] + store.game.cells[5] + store.game.cells[8] === 'ooo') {
//     store.game.over = true
//     return true
//   } else if (store.game.cells[0] + store.game.cells[4] + store.game.cells[8] === 'xxx' || store.game.cells[0] + store.game.cells[4] + store.game.cells[8] === 'ooo') {
//     store.game.over = true
//     return true
//   } else if (store.game.cells[2] + store.game.cells[4] + store.game.cells[6] === 'xxx' || store.game.cells[2] + store.game.cells[4] + store.game.cells[6] === 'ooo') {
//     store.game.over = true
//     return true
//   } else if (store.moves > 8) {
//     store.game.over = true
//     return true
//   } else { store.game.over = false }
// }

const onSelectTile = function (event) {
  console.log('this is the tile event data id', this.dataset.id)
  event.preventDefault()
  const data = getFormFields(event.target)
  store.game.cell = {}
  store.game.cell.index = this.dataset.id
  console.log(store.game.cell.index)
  turn()
  store.moves++
  $(this).text(store.game.cell.value)
  $(this).off()
  isGameOver()
  displayGameResult(data)
  // api.updateGame(data)
  //   .then(ui.selectTileSuccess)
  //   .catch(ui.selectTileFailure)
  isGameOver()
  store.xTurn = !store.xTurn
  console.log('player x turn ', store.xTurn)
  console.log('moves ', store.moves)
  console.log('this is the store after select tile ', store)
  console.log('win array ', store.game.cells[0] + store.game.cells[1] + store.game.cells[2])
  console.log('result of isgameover function ', isGameOver())
}

const isGameOver = function () {
  if (store.game.cells[0] + store.game.cells[1] + store.game.cells[2] === 'xxx' || store.game.cells[0] + store.game.cells[1] + store.game.cells[2] === 'ooo') {
    store.game.over = true
    return true
  } else if (store.game.cells[3] + store.game.cells[4] + store.game.cells[5] === 'xxx' || store.game.cells[3] + store.game.cells[4] + store.game.cells[5] === 'ooo') {
    store.game.over = true
    return true
  } else if (store.game.cells[6] + store.game.cells[7] + store.game.cells[8] === 'xxx' || store.game.cells[6] + store.game.cells[7] + store.game.cells[8] === 'ooo') {
    store.game.over = true
    return true
  } else if (store.game.cells[0] + store.game.cells[3] + store.game.cells[6] === 'xxx' || store.game.cells[0] + store.game.cells[3] + store.game.cells[6] === 'ooo') {
    store.game.over = true
    return true
  } else if (store.game.cells[1] + store.game.cells[4] + store.game.cells[7] === 'xxx' || store.game.cells[1] + store.game.cells[4] + store.game.cells[7] === 'ooo') {
    store.game.over = true
    return true
  } else if (store.game.cells[2] + store.game.cells[5] + store.game.cells[8] === 'xxx' || store.game.cells[2] + store.game.cells[5] + store.game.cells[8] === 'ooo') {
    store.game.over = true
    return true
  } else if (store.game.cells[0] + store.game.cells[4] + store.game.cells[8] === 'xxx' || store.game.cells[0] + store.game.cells[4] + store.game.cells[8] === 'ooo') {
    store.game.over = true
    return true
  } else if (store.game.cells[2] + store.game.cells[4] + store.game.cells[6] === 'xxx' || store.game.cells[2] + store.game.cells[4] + store.game.cells[6] === 'ooo') {
    store.game.over = true
    return true
  } else if (store.moves > 8) {
    store.game.over = true
    return true
  } else { store.game.over = false }
}

const turn = function () {
  if (store.xTurn === true) {
    store.game.cell.value = 'x'
  } else store.game.cell.value = 'o'
}

const displayGameResult = function (data) {
  if (store.game.over === false) {
    api.updateGame(data)
      .then(ui.selectTileSuccess)
      .catch(ui.selectTileFailure)
  } else {
    api.updateGame(data)
      .then(ui.endGameSuccess)
      .catch(ui.endGameFailure)
  }
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
}

module.exports = {
  addHandlers
}
