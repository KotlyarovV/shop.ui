import * as types from '../constants/ActionTypes'

const initialState = {
    books: []
};

export default function books(state = initialState, action) {
    switch (action.type) {
        case types.REQUEST_BOOKS:
            const id = 1;
            return {
                books : [{id : id, author : "Иван Иваныч Говнов", bookName : "Ссаная книга Говнова c просто пиздец каким дохуя длинным названием", price : 3}]
            };
    }
    return state
}
