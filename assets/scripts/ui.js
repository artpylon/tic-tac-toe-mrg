'use strict'

const signUpSuccess = (data) => {
  // don't leave this in your production application.
  // instead manipulate the DOM
  console.log(data)
}
const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  // don't leave this in your production application.
  // instead manipulate the DOM
  console.log(data)
}
const signInFailure = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
