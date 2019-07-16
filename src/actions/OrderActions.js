import * as Type from '../constants/ActionTypes'
import {ORDER_URL} from "../constants/Urls";

export function sendOrder(order) {
    return (dispatch) => {
        fetch(ORDER_URL, {
                method:"POST",
                //credentials : 'include',
                body : JSON.stringify(order),
                headers : {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                dispatch(clearOrder());
            })
            .catch((e) => { });
    }
}

export function addBookToOrder(bookId, quantity) {
    return {
        type : Type.ADD_OR_UPDATE_BOOK_IN_ORDER,
        order : {book : bookId, quantity : quantity}
    }
}

export function clearOrder() {
    return {
        type : Type.CLEAR_ORDER,
    }
}

export function deleteBookFromOrder(bookId) {
    return {
        type : Type.DELETE_BOOK,
        book : bookId
    }
}
