import * as Type from '../constants/ActionTypes'
import {BOOKS_URL} from "../constants/Urls";

export function booksFetchData() {
    return (dispatch) => {
      fetch(BOOKS_URL)
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }
    
              return response;
          })
          .then((response) => {
              return response.json()
          })
          .then((books) => dispatch(booksFetchDataSuccess(books)))
          .catch(() => dispatch(booksHasErrored(true)));
    };
}

export function booksHasErrored(bool) {
    return {
        type : Type.BOOKS_HAS_ERRORED,
        hasErrored : bool
    }
}

export function booksFetchDataSuccess(books) {
    return {
        type : Type.BOOKS_FETCH_DATA_SUCCESS,
        books
    }
}
