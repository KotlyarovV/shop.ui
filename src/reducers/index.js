import { combineReducers } from 'redux'
import {books, booksHasErrored} from './books'
import {user} from './user'
import {order} from "./order";

export default combineReducers({
    books,
    booksHasErrored,
    user,
    order
});
