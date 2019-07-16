import * as Type from "../constants/ActionTypes";

export function user(state = null, action) {
    switch (action.type) {
        case Type.USER_FETCH_DATA_SUCCESS:
            return action.user;
        case Type.USER_FETCH_DATA_ERROR:
            return null;
        default:
            return state;
    }
}