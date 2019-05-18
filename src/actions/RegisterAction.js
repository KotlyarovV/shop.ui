export function postRegistration(data) {
    return (dispatch) => {
        fetch("http://127.0.0.1:8000/users/", {
                headers : {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method : 'POST',
                body : JSON.stringify(data)
            })
            .then((response) => {
                console.log(response);
                return response;
            })
            .then((response) => {
                return response.json()
            })
            .then((user) => {
               console.log(user)
            });
    }
}
