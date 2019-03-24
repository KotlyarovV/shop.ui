import * as types from '../constants/ActionTypes'

export function requestBooks(spec) {
    return {
        type: types.REQUEST_BOOKS,
        spec
    }
}
