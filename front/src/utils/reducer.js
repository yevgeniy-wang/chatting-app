import * as TYPE from './types'
const defaultState = {
  username: '',
  error: false,
  message: '',
  messages: [],
  focused: false,
  typing: []
};

export function reducer(state = defaultState, {type, payload}) {
  switch (type) {
    case TYPE.ADD_USER:
      return {...state, username: payload}
    case TYPE.SET_ERROR:
      return {...state, error: payload}
    case TYPE.SET_MESSAGE:
      return {...state, message: payload}
    case TYPE.ADD_MESSAGES:
      return {...state, messages: payload}
    case TYPE.SET_FOCUS:
      return {...state, focused: payload}
    case TYPE.SET_TYPING:
      return {...state, typing: payload}
    default:
      return {...state}
  }
}