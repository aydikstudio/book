// @ts-nocheck


import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk} from "redux-thunk";
import books from './books'

const rootReducer = combineReducers({
    books
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default rootReducer
