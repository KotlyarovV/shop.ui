import { combineReducers } from 'redux'
import {books, booksHasErrored, booksLoading} from './books'
import {user} from './user'
import {order} from "./order";
import {register} from "../serviceWorker";

export default combineReducers({
    books,
    booksHasErrored,
    booksLoading,
 //   register,
    user,
    order
});
