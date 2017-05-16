'use strict'

const config = require('./config')
const store = require('./store')

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
    store.statusText = response.statusText
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

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
