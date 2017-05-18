'use strict'
const api = require('./api')
const events = require('./events')
const store = require('./store')
const ui = require('./ui')
let whoWon = ''
// let gamesWon = $.grep(store.games, function() {
//   return store.games.
// }
// $.grep( [ 0, 1, 2 ], function( n, i ) {
//     return n > 0;
// }, true );

// Authentication

const signUpSuccess = (data) => {
  $('#sign-up').hide()
  $('.errormsg').hide()
}
const signUpFailure = (error) => {
  $('.errormsg').hide()
  $('.errormsg').text('Sign up failed. Please check your email and passwords.')
}

const signInSuccess = (data) => {
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.errormsg').hide()
  $('.signout-button').show()
  $('#changepwbutton').show()
  $('.startgame').show()
  $('.userstats').show()
  api.getIndex()
    .then(getStatsSuccess)
    .catch(getStatsFailure)
}

const signInFailure = (error) => {
  $('.errormsg').hide()
  $('.errormsg').text('Sign in failed. Please check your email and password.')
}

const changePasswordSuccess = (data) => {
  $('#change-password').hide()
  $('.errormsg').hide()
  $('.changepw-success').text('Password has been changed.')
}
const changePasswordFailure = (error) => {
  $('.errormsg').hide()
  $('.errormsg').text('Change password failed. Please check your passwords.</p>')
}

const signOutSuccess = (data) => {
  $('.signout-button').hide()
  $('#change-password').hide()
  $('#changepwbutton').hide()
  $('.errormsg').hide()
  $('.startgame').hide()
  $('.userstats').hide()
  $('.xwin').hide()
  $('.owin').hide()
  $('.tie').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('.gameboard').show()
  $('#zero').off('click', events.onSelectTile).text('')
  $('#one').off('click', events.onSelectTile).text('')
  $('#two').off('click', events.onSelectTile).text('')
  $('#three').off('click', events.onSelectTile).text('')
  $('#four').off('click', events.onSelectTile).text('')
  $('#five').off('click', events.onSelectTile).text('')
  $('#six').off('click', events.onSelectTile).text('')
  $('#seven').off('click', events.onSelectTile).text('')
  $('#eight').off('click', events.onSelectTile).text('')
}
const signOutFailure = (error) => {
  $('.errormsg').hide()
  $('.signout-button').after('<p>Sign out failed. Please contact the webmaster.</p>')
  $('p').addClass('errormsg')
}

// Game
const startGameSuccess = (data) => {
  $('.startgame').hide()
  api.getIndex()
    .then(getStatsSuccess)
    .catch(getStatsFailure)
}

const startGameFailure = (error) => {
  $('.errormsg').hide()
  $('.startgame').after('<p>Start game failed. Please contact the webmaster.</p>')
  $('p').addClass('errormsg')
}

const restartGameSuccess = (data) => {
  $('.startgame').hide()
  api.getIndex()
    .then(getStatsSuccess)
    .catch(getStatsFailure)
}

const restartGameFailure = (error) => {
  $('.errormsg').hide()
  $('.restart').after('<p>Restart game failed. Please contact the webmaster.</p>')
  $('p').addClass('errormsg')
}

const isGameOver = function () {
  if (store.game.cells[0] + store.game.cells[1] + store.game.cells[2] === 'xxx') {
    whoWon = 'x'
    store.game.over = 1
    return store.game.over
  } else if (store.game.cells[0] + store.game.cells[1] + store.game.cells[2] === 'ooo') {
    whoWon = 'o'
    store.game.over = 1
    return store.game.over
  } else if (store.game.cells[3] + store.game.cells[4] + store.game.cells[5] === 'xxx') {
    whoWon = 'x'
    store.game.over = 1
    return store.game.over
  } else if (store.game.cells[3] + store.game.cells[4] + store.game.cells[5] === 'ooo') {
    whoWon = 'o'
    store.game.over = 1
    return store.game.over
  } else if (store.game.cells[6] + store.game.cells[7] + store.game.cells[8] === 'xxx') {
    whoWon = 'x'
    store.game.over = 1
    return store.game.over
  } else if (store.game.cells[6] + store.game.cells[7] + store.game.cells[8] === 'ooo') {
    whoWon = 'o'
    store.game.over = 1
    return store.game.over
  } else if (store.game.cells[0] + store.game.cells[3] + store.game.cells[6] === 'xxx') {
    whoWon = 'x'
    store.game.over = 1
    return store.game.over
  } else if (store.game.cells[0] + store.game.cells[3] + store.game.cells[6] === 'ooo') {
    whoWon = 'o'
    store.game.over = 1
    return store.game.over
  } else if (store.game.cells[1] + store.game.cells[4] + store.game.cells[7] === 'xxx') {
    whoWon = 'x'
    store.game.over = 1
    return store.game.over
  } else if (store.game.cells[1] + store.game.cells[4] + store.game.cells[7] === 'ooo') {
    whoWon = 'o'
    store.game.over = 1
    return store.game.over
  } else if (store.game.cells[2] + store.game.cells[5] + store.game.cells[8] === 'xxx') {
    whoWon = 'x'
    store.game.over = 1
    return store.game.over
  } else if (store.game.cells[2] + store.game.cells[5] + store.game.cells[8] === 'ooo') {
    whoWon = 'o'
    store.game.over = 1
    return store.game.over
  } else if (store.game.cells[0] + store.game.cells[4] + store.game.cells[8] === 'xxx') {
    whoWon = 'x'
    store.game.over = 1
    return store.game.over
  } else if (store.game.cells[0] + store.game.cells[4] + store.game.cells[8] === 'ooo') {
    whoWon = 'o'
    store.game.over = 1
    return store.game.over
  } else if (store.game.cells[2] + store.game.cells[4] + store.game.cells[6] === 'xxx') {
    whoWon = 'x'
    store.game.over = 1
    return store.game.over
  } else if (store.game.cells[2] + store.game.cells[4] + store.game.cells[6] === 'ooo') {
    whoWon = 'o'
    store.game.over = 1
    return store.game.over
  } else if (store.moves > 8) {
    whoWon = 'Nobody'
    store.game.over = 1
    return store.game.over
  } else { store.game.over = 0 }
  return store.game.over
}

const gameOver = function () {
  if (store.game.over === 1) {
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
    api.updateGame()
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
  }
}

// edge case, someone wins by playing the 9th tile...
const gameOverUI = function () {
  console.log('store.game.value is ', store.game.value)
  console.log('value is ', store.game.cell.value)
  console.log('moves is ', store.moves)
  if (whoWon === 'Nobody') {
    $('.gameboard').hide()
    $('.tie').show()
    console.log('gameOverUI thinks no one won')
  } else if (whoWon === 'o') {
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
  $('.errormsg').hide()
  $('.gameboard').after('<p>Select tile failed. Please contact the webmaster.</p>')
  $('p').addClass('errormsg')
}

const getStatsSuccess = (data) => {
  console.log('store.games after index call ', store.games)
  $('.played').text(store.games.length)
}

const getStatsFailure = (error) => {
  $('.errormsg').hide()
  $('.played').after('<p>Stats failed. Please contact the webmaster.</p>')
  $('p').addClass('errormsg')
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
  gameOverUI,
  getStatsSuccess,
  getStatsFailure
}
