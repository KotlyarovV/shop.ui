
export function booksFetchData() {
    return (dispatch) => {
      dispatch(booksIsLoading(true));

      fetch("http://127.0.0.1:8000/books/")
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }
    
              dispatch(booksIsLoading(false));
              return response;
          })
          .then((response) => {
              return response.json()
          })
          .then((books) => dispatch(booksFetchDataSucccess(books)))
          .catch(() => dispatch(booksHasErrored(true)));
    };
}

export function booksHasErrored(bool) {
    return {
        type : "BOOKS_HAS_ERRORED",
        hasErrored : bool
    }
}

export function booksIsLoading(bool) {
    return{
        type : "BOOKS_IS_LOADING",
        isLoading : bool
    }
}

export function booksFetchDataSucccess(books) {
    return {
        type : "BOOKS_FETCH_DATA_SUCCESS",
        books
    }
}
