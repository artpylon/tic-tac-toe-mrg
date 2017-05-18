'use strict'

const config = require('./config')
const store = require('./store')

// Authentication
const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
    .then((response) => {
      console.log('this is response', response)
      store.userToken = response.user.token
      store.statusText = response.statusText
      store.id = response.id
      console.log('this is store: ', store)
    })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
  .then((response) => {
    console.log('This is the response when logging in: ', response)
    store.userToken = response.user.token
    store.id = response.user.id
  })
}

const changePassword = function (data) {
  console.log('this is store at change-password ajax: ', store)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data
  })
}

const signOut = function (data) {
  console.log('this is store at signout ajax: ', store)
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data
  })
}

// Game
const startGame = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data: '{}'
  })
  .then((response) => {
    console.log('This is the response when starting a game: ', response)
    store.game = response.game
    store.player_o = response.player_o
    store.over = response.over
    console.log('This is the store when starting a game: ', store)
  })
}

const updateGame = function () {
  console.log('inside update game store.game.over is ', store.game.over)
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data: {"game": {"cell": {"index": store.game.cell.index, "value": store.game.cell.value}}, "over": store.game.over}
  })
  .then((response) => {
    store.game.cells = response.game.cells
  })
}

// const endGame = function () {
//   console.log('endGame api store.game.over is ', store.game.over)
//   return $.ajax({
//     url: config.apiOrigin + '/games/' + store.game.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.userToken
//     },
//     data: {"game": {"cell": {"index": store.game.cell.index, "value": store.game.cell.value}}, "over": store.game.over}
//   })
  // .then((response) => {
  //   store.game.cells = response.game.cells
  // })
// }

const getIndex = function (data) {
  console.log('store before getIndex ', store)
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.userToken
    }
  })
  .then((response) => {
    console.log('response.games after index call ', response.games)
    store.games = response.games
    console.log('store.games after index call ', store.games)
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  startGame,
  updateGame,
  getIndex
}
