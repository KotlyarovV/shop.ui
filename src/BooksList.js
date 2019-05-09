import React, {Component} from "react";
import Book from './Book.js'
import {connect} from 'react-redux'
import {booksFetchData} from './actions/BookActions'

class BooksList extends Component {
    componentDidMount() {
        this.props.fetchData()
    }

    render() {
        const productsStyle = {
			display : 'flex',
            flexWrap : 'wrap',
            textAlign: 'center',
            justifyContent: 'center',
            //alignContent: 'space-between'
		};

        console.log(this.props.books);
    	const books = this.props.books
            .map(book => <Book

                author={book.author}
                bookName = {book.bookName}
                price = {book.price}/>);

        return (
            <div style={productsStyle}>
                {books}
            </div>)
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
      books : state.books,
      hasErrored : state.booksHasErrored,
      isLoading : state.booksIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(booksFetchData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);