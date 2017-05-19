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
  $('.speech').text('Im just going to enjoy my breakfast while you play')
}
const signUpFailure = (error) => {
  $('.errormsg').hide()
  $('.errormsg').text('Sign up failed. Please check your email and passwords.')
  $('.errormsg').show()
}

const signInSuccess = (data) => {
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.errormsg').hide()
  $('.signout-button').show()
  $('#changepwbutton').show()
  $('.startgame').show()
  $('.userstats').show()
  $('.speech').text('I only have time for coffee.')
  api.getIndex()
    .then(getStatsSuccess)
    .catch(getStatsFailure)
}

const signInFailure = (error) => {
  $('.errormsg').hide()
  $('.errormsg').text('Sign in failed. Please check your email and password.')
  $('.errormsg').show()
}

const changePasswordSuccess = (data) => {
  $('.errormsg').hide()
  $('.changepwmsg').show()
  $('.speech').text('last night I dreamed I was eating a large, tasteless gumdrop, and awoke to discover I was chewing on one of my foam disposable earplugs. Perhaps I should consider moderating my nighttime coffee consumption.')
  $('#change-password').hide()
  $('#changepwbutton').show()
}
const changePasswordFailure = (error) => {
  $('.errormsg').hide()
  $('.errormsg').text('Change password failed. Please check your passwords.')
  $('.errormsg').show()
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
  $('.changepwmsg').hide()
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
  $('.errormsg').text('Sign out failed. Please contact the webmaster.')
  $('.errormsg').show()
}

// Game
const startGameSuccess = (data) => {
  $('.startgame').hide()
  $('.errormsg').hide()
  $('.changepwmsg').hide()
  $('.speech').text('You know, this is – excuse me – a damn fine cup of coffee.')
  api.getIndex()
    .then(getStatsSuccess)
    .catch(getStatsFailure)
}

const startGameFailure = (error) => {
  $('.errormsg').hide()
  $('.errormsg').text('Start game failed. Please contact the webmaster.')
  $('.errormsg').show()
}

const restartGameSuccess = (data) => {
  $('.startgame').hide()
  $('.errormsg').hide()
  $('.speech').text('This must be where pies go when they die.')
  api.getIndex()
    .then(getStatsSuccess)
    .catch(getStatsFailure)
}

const restartGameFailure = (error) => {
  $('.errormsg').hide()
  $('.errormsg').text('Restart game failed. Please contact the webmaster.')
  $('.errormsg').show()
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
  if (whoWon === 'Nobody') {
    $('.gameboard').hide()
    $('.tie').show()
    $('.speech').text('I have no idea where this will lead us, but I have a definite feeling it will be a place both wonderful and strange.')
  } else if (whoWon === 'o') {
    $('.gameboard').hide()
    $('.owin').show()
    $('.speech').text('This must be where pies go when they die.')
  } else {
    $('.gameboard').hide()
    $('.xwin').show()
    $('.speech').text('Every day, once a day, give yourself a present.')
  }
}

const selectTileSuccess = () => {
  $('.speech').text('Nothing beats the taste sensation when maple syrup collides with ham.')
  $('.errormsg').hide()
  isGameOver()
  gameOver()
}

const selectTileFailure = (error) => {
  $('.errormsg').hide()
  $('.errormsg').text('Select tile failed. Please contact the webmaster.')
  $('.errormsg').show()
}

const getStatsSuccess = (data) => {
  // $('.played').text(store.games.length)
}

const getStatsFailure = (error) => {
  $('.errormsg').hide()
  $('.errormsg').text('Stats failed. Please contact the webmaster.')
  $('.errormsg').show()
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
