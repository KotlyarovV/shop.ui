import { combineReducers } from 'redux'
import {books, booksHasErrored, booksLoading} from './books'
import user from './user'

export default combineReducers({
    books,
    booksHasErrored,
    booksLoading,
    user
});
