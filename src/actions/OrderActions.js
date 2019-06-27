import {fetchUser, userFetchDataProplem} from "./RegisterAction";

export function sendOrder(order) {
    console.log(order);
    return (dispatch) => {
        fetch("http://127.0.0.1:8000/order/", {
                method:"POST",
                credentials : 'include',
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
                console.log(data)
            })
            .catch((e) => {
            });
    }
}

export function addBookToOrder(bookId, quantity) {
    return {
        type : 'ADD_OR_UPDATE_BOOK_IN_ORDER',
        order : {book : bookId, quantity : quantity}
    }
}

export function deleteBookFromOrder(bookId) {
    return {
        type : 'DELETE_BOOK',
        book : bookId
    }
}
