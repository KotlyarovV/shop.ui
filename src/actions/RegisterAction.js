
export function fetchUser(userId) {
    return (dispatch) => {
            fetch(`http://127.0.0.1:8000/users/${userId}/`, {
                method: 'GET',
                credentials : 'include',
            })
            .then((r) => {
                return r.json()
            })
            .then((r) => {
                if (r.detail) {
                    dispatch(userFetchDataProplem())
                }
                else {
                    dispatch(userFetchDataSuccess(r));
                }
            })
            .catch((e) => {
                dispatch(userFetchDataProplem())
            });
    }
}

export function postLogin(data) {
    return (dispatch) => {
          fetch("http://127.0.0.1:8000/auth/login/", {
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
                  console.log(data)
                  fetchUser(data.user.pk)(dispatch);
              })
              .catch((e) => {
                  dispatch(userFetchDataProplem())
              });
    };
}

export function userFetchDataSuccess(user) {
    return {
        type : "USER_FETCH_DATA_SUCCESS",
        user
    }
}

export function userFetchDataProplem(user) {
    return {
        type : "USER_FETCH_DATA_ERROR",
    }
}

export function postRegistration(data) {
    return (dispatch) => {
        fetch("http://127.0.0.1:8000/users/", {
                //credentials : 'include',
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
            .then((user) => {
                const userId = user.url.substring(28, user.url.length - 1);
                console.log(data)
                const loginData = {
                    email: data.email,
                    username : data.email,
                    password: data.password
                };
                console.log(loginData)
                postLogin(loginData)(dispatch)
               // fetchUser(userId)(dispatch);
            })
            .catch((e) => {
                dispatch(userFetchDataProplem())
            });
    }
}
