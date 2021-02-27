import { createStore } from 'redux'

const state = {
  answer: 42
  // TODO
}

const reducer = (state, action) => {
  switch (action.type) {
  // TODO
  default:
    return state
  }
}

export default createStore(reducer, state)
