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
      store.userToken = response.user.token
      console.log(store)
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
  console.log('this is the users token: ', store.userToken)
  console.log('this is data variable at change password: ', data)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.id,
    method: 'PATCH',
    authorization: 'Token token=' + store.userToken,
    data
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword
}
