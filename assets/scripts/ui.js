'use strict'
const api = require('./api')
const events = require('./events')
const store = require('./store')
// const storeValue = store.game.value
// const storeMoves = store.moves

// Authentication
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
  $('.startgame').show()
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

// Game
const startGameSuccess = (data) => {
  $('.startgame').hide()
}

const startGameFailure = (error) => {
}

const restartGameSuccess = (data) => {
  $('.startgame').hide()
}

const restartGameFailure = (error) => {
}

const isGameOver = function () {
  if (store.game.cells[0] + store.game.cells[1] + store.game.cells[2] === 'xxx' || store.game.cells[0] + store.game.cells[1] + store.game.cells[2] === 'ooo') {
    store.game.over = true
    return store.game.over
  } else if (store.game.cells[3] + store.game.cells[4] + store.game.cells[5] === 'xxx' || store.game.cells[3] + store.game.cells[4] + store.game.cells[5] === 'ooo') {
    store.game.over = true
    return store.game.over
  } else if (store.game.cells[6] + store.game.cells[7] + store.game.cells[8] === 'xxx' || store.game.cells[6] + store.game.cells[7] + store.game.cells[8] === 'ooo') {
    store.game.over = true
    return store.game.over
  } else if (store.game.cells[0] + store.game.cells[3] + store.game.cells[6] === 'xxx' || store.game.cells[0] + store.game.cells[3] + store.game.cells[6] === 'ooo') {
    store.game.over = true
    return store.game.over
  } else if (store.game.cells[1] + store.game.cells[4] + store.game.cells[7] === 'xxx' || store.game.cells[1] + store.game.cells[4] + store.game.cells[7] === 'ooo') {
    store.game.over = true
    return store.game.over
  } else if (store.game.cells[2] + store.game.cells[5] + store.game.cells[8] === 'xxx' || store.game.cells[2] + store.game.cells[5] + store.game.cells[8] === 'ooo') {
    store.game.over = true
    return store.game.over
  } else if (store.game.cells[0] + store.game.cells[4] + store.game.cells[8] === 'xxx' || store.game.cells[0] + store.game.cells[4] + store.game.cells[8] === 'ooo') {
    store.game.over = true
    return store.game.over
  } else if (store.game.cells[2] + store.game.cells[4] + store.game.cells[6] === 'xxx' || store.game.cells[2] + store.game.cells[4] + store.game.cells[6] === 'ooo') {
    store.game.over = true
    return store.game.over
  } else if (store.moves > 8) {
    store.game.over = true
    return store.game.over
  } else { store.game.over = false }
  return store.game.over
}

const gameOver = function () {
  if (store.game.over === true) {
    $('#zero').off('click', events.onSelectTile)
    $('#one').off('click', events.onSelectTile)
    $('#two').off('click', events.onSelectTile)
    $('#three').off('click', events.onSelectTile)
    $('#four').off('click', events.onSelectTile)
    $('#five').off('click', events.onSelectTile)
    $('#six').off('click', events.onSelectTile)
    $('#seven').off('click', events.onSelectTile)
    $('#eight').off('click', events.onSelectTile)
    gameOverUI()
  }
}

// edge case, someone wins by playing the 9th tile...
const gameOverUI = function () {
  console.log('store.game.value is ', store.game.value)
  console.log('value is ', store.game.cell.value)
  console.log('moves is ', store.moves)
  if (store.moves > 8) {
    $('.gameboard').hide()
    $('.tie').show()
    console.log('gameOverUI thinks no one won')
  } else if (store.game.cell.value === 'o') {
    $('.gameboard').hide()
    $('.owin').show()
    console.log('gameOverUI thinks o won')
  } else {
    $('.gameboard').hide()
    $('.xwin').show()
    console.log('gameOverUI thinks x won')
  }
}

const selectTileSuccess = () => {
  isGameOver()
  gameOver()
}

const selectTileFailure = (error) => {
}

module.exports = {
  // Authentication
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  // Game
  startGameSuccess,
  startGameFailure,
  selectTileSuccess,
  selectTileFailure,
  gameOverUI
}
