'use strict'

const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  console.log('data is', data)

  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
    .then((response) => {
      store.userToken = response.user.token
    })
}

const signIn = function (data) {
  console.log('data is', data)

  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
    .then((response) => {
      store.userToken = response.user.token
    })
}

module.exports = {
  signUp,
  signIn
}
