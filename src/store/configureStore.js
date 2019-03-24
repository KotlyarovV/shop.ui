import {createStore, applyMiddleware} from 'redux'
import combineReducers from '../reducers'

function configureStore(initialState) {
    const store = createStore(combineReducers, initialState);
    return store;
}

const store = configureStore();

export default store;