import React, {Component} from "react";
import Book from './Book.js'
import * as BookActions from './actions/BookActions'

export default class BooksList extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.store.getState();
    }

    componentDidMount ()  {
        let store = this.props.store;
        store.dispatch(BookActions.requestBooks({}));
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
        this.setState(store.getState())
    };

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const productsStyle = {
			display : 'flex',
            flexWrap : 'wrap'
		};

		const books = this.state.books.books
            .map(book => <Book author={book.author} bookName = {book.bookName} price = {book.price}/>);

        return (
            <div style={productsStyle}>
                {books}
            </div>)
    }
}