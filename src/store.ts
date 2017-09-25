import { createStore } from 'redux'
import itemReducer  from './reducers/items'

export const configureStore = () => {
    return createStore(itemReducer)
}