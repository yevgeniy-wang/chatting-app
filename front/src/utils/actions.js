import * as TYPE from './types'

export function addUser(payload) {
  return dispatch => dispatch({type: TYPE.ADD_USER, payload})
}

export function setError(payload) {
  return dispatch => dispatch({type: TYPE.SET_ERROR, payload})
}

export function setMessage(payload) {
  return dispatch => dispatch({type: TYPE.SET_MESSAGE, payload})
}

export function addMessages(payload) {
  return dispatch => dispatch({type: TYPE.ADD_MESSAGES, payload})
}

export function setFocus(payload) {
  return dispatch => dispatch({type: TYPE.SET_FOCUS, payload})
}

export function setTyping(payload) {
  return dispatch => dispatch({type: TYPE.SET_TYPING, payload})
}