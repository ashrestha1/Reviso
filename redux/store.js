import { createStore } from 'redux'
import state from './state'
import { rootReducer } from './reducers'

export default createStore(rootReducer, state)
