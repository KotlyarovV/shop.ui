import * as Type from "../constants/ActionTypes"

export function order(state = [], action) {

    switch (action.type) {
        case Type.ADD_OR_UPDATE_BOOK_IN_ORDER:

            if (state.some(b => b.book === action.order.book)) {
                const bookInOrder = state.find(b => b.book === action.order.book);
                bookInOrder.quantity = action.order.quantity;
                return state;
            }

            return state.concat([action.order]);

        case Type.DELETE_BOOK:
            return state.filter(b => b.book !== action.book);

        case Type.CLEAR_ORDER:
            return [];

        default:
            return state;
    }
}
