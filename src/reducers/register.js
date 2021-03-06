import {ADD_USER} from "../constants/ActionTypes";

const postReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_USER:
            return state.concat([action.data]);
        default:
            return state;
    }
};

export default postReducer;