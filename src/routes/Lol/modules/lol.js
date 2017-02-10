// ------------------------------------
// Constants
// ------------------------------------
export const LOL_INCREMENT = 'LOL_INCREMENT'
export const LOL_CLEAR = 'LOL_CLEAR'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 'ol') {
  return {
    type    : LOL_INCREMENT,
    payload : value
  }
}

export function clear (value = 'Lol') {
  return {
    type    : LOL_CLEAR,
    payload : value
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const actions = {
  increment,
  clear
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOL_INCREMENT]    : (state, action) => state + action.payload,
  [LOL_CLEAR]    : (state, action) => action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 'Lol'
export default function lolReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
