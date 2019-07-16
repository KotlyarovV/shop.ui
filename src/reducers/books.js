import * as Type from "../constants/ActionTypes";

export function booksHasErrored(state = false, action) {
    switch (action.type) {
        case Type.BOOKS_HAS_ERRORED:
            return action.hasErrored;

        default:
            return state;
    }
}

export function books(state = [], action) {
    switch (action.type) {
        case Type.BOOKS_FETCH_DATA_SUCCESS:
            return action.books;
        default:
            return state;
    }
}