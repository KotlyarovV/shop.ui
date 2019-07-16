import * as Type from '../constants/ActionTypes'
import {AUTH_URL, USER_URL} from "../constants/Urls";

export function fetchUser(userId) {
    return (dispatch) => {
            fetch(`${USER_URL}${userId}/`, {
                method: 'GET',
                credentials : 'include',
            })
            .then((r) => {
                return r.json()
            })
            .then((r) => {
                if (r.detail) {
                    dispatch(userFetchDataProblem())
                }
                else {
                    dispatch(userFetchDataSuccess(r));
                }
            })
            .catch((e) => {
                dispatch(userFetchDataProblem())
            });
    }
}

export function postLogin(data) {
    return (dispatch) => {
          fetch(AUTH_URL, {
              method:"POST",
              credentials : 'include',
              body : JSON.stringify(data),
                  headers : {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                  }
              })
              .then((response) => {
                  return response.json();
              })
              .then((data) => {
                  fetchUser(data.user.pk)(dispatch);
              })
              .catch(() => {
                  dispatch(userFetchDataProblem())
              });
    };
}

export function userFetchDataSuccess(user) {
    return {
        type : Type.USER_FETCH_DATA_SUCCESS,
        user
    }
}

export function userFetchDataProblem() {
    return {
        type : Type.USER_FETCH_DATA_ERROR,
    }
}

export function postRegistration(data) {
    return (dispatch) => {
        fetch(USER_URL, {
                headers : {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method : 'POST',
                body : JSON.stringify(data)
            })
            .then((response) => {
                return response.json();
            })
            .then(() => {
                const loginData = {
                    email: data.email,
                    username : data.email,
                    password: data.password
                };
                postLogin(loginData)(dispatch)
            })
            .catch(() => {
                dispatch(userFetchDataProblem())
            });
    }
}
