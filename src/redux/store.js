import allReducers from './reducers'
import { createStore, applyMiddleware, compose } from 'redux';

const initialState = {};

const store = createStore(
    allReducers,
    initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__())
        
export default store;