export function user(state = null, action) {
    switch (action.type) {
        case 'USER_FETCH_DATA_SUCCESS':
            return action.user;
        case 'USER_FETCH_DATA_ERROR':
            return null;
        default:
            return state;
    }
}