export function order(state = [], action) {
    switch (action.type) {
        case 'ADD_OR_UPDATE_BOOK_IN_ORDER':

            console.log(action.order)
            if (state.some(b => b.book === action.order.book)) {
                const bookInOrder = state.find(b => b.book === action.order.book);
                bookInOrder.quantity = action.order.quantity;
                return state;
            }

            return state.concat([action.order]);

        case 'DELETE_BOOK':
            return state.filter(b => b.book !== action.book);

        case 'CLEAR_ORDER':
            return [];

        default:
            return state;
    }
}
