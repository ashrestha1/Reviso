import { createStore } from 'redux'
import state from './state'
import reducer from './reducer'

export default createStore(reducer, state)
