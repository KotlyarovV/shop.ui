import React, {Component} from "react";
import Book from './Book.js'
import {connect} from 'react-redux'
import {booksFetchData} from './actions/BookActions'
import ReactModal from 'react-modal'
import {addBookToOrder, deleteBookFromOrder} from "./actions/OrderActions";

const customStyles = {
    content : {
       // top                   : '50%',
        left                  : '25%',
        textAlign : 'center',
        //right                 : '40%',
        //bottom                : 'auto',
        //transform             : 'translate(-50%, -50%)',
        width : '50%'
    }
};

class BooksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal (book) {
        console.log(book);
        const hasSameBookInOrder = this.props.order.some(b => b.book === book.id);

        if (hasSameBookInOrder) {
            const quantity = this.props.order.find(b => b.book === book.id).quantity;
            this.setState({ showModal: true, chosenBook : book, quantity : quantity });
        } else {
            this.setState({ showModal: true, chosenBook : book, quantity : 1 });
        }
    }

    addOrUpdateBook = () => {
        this.props.addBookToOrder(this.state.chosenBook.id, Number(this.state.quantity));
    };

    handleCloseModal = () => {
        this.setState({ showModal: false, chosenBook : null, quantity : null });
    };

    getChosenBookInfo = () =>{
        if (!this.state.chosenBook)
            return '';

        return (
            <div>
                Автор: {this.state.chosenBook.author}<br/>
                Название: {this.state.chosenBook.bookName}<br/>
                Стоимость: {this.state.chosenBook.price} рублей<br/><br/>
            </div>
        )
    };

    deleteChosenBookFromOrder = () => {
        this.props.deleteBook(this.state.chosenBook.id);
    };

    getBookInOrderParams = () => {
      if (!this.state.chosenBook)
          return '';

      const bookInOrder = this.props.order.some(b => b.book === this.state.chosenBook.id);

      if (bookInOrder) {
          return (
              <div>
                  Книга добавлена в корзинку
                  <br/>
                  <button onClick={this.addOrUpdateBook}>Изменить количество</button>
                  <br/>
                  <button onClick={this.deleteChosenBookFromOrder}>Удалить</button>
              </div>
          );
      }

      return (<div>
          <br/>
          <button onClick={this.addOrUpdateBook}>Добавить в корзинку</button><br/>
      </div>);
    };

    changeQuantity = (event) => {
        console.log(event.target.value);
        this.setState({quantity: event.target.value});
    };

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
                onClick={() => {this.handleOpenModal(book)}}
                author={book.author}
                bookName = {book.bookName}
                price = {book.price}/>);

        return (
            <div>
                <div>
                    <ReactModal
                        isOpen={this.state.showModal}
                        style = {customStyles}
                        ariaHideApp={false}>
                        <div style={{height : 'auto'}}>
                            <div style={{float : 'left', width : '50%', margin :0, padding :0 }} >
                                <img src={'noImage.png'} width={'70%'} height={'40%'}/>
                            </div>
                            <div >
                                {this.getChosenBookInfo()}
                            </div>
                            <div>
                                <div>
                                    <label>Количество экземпляров</label><br/>
                                    <input
                                        type={"number"}
                                        min="1"
                                        value={this.state.quantity}
                                        max="5"
                                        onChange={this.changeQuantity}/>
                                        <br/>

                                    {this.getBookInOrderParams()}
                                </div>
                                <button onClick={this.handleCloseModal}>Закрыть</button>
                            </div>
                        </div>
                    </ReactModal>
                </div>
                <div style={productsStyle}>
                    {books}
                </div>
            </div>)
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
      books : state.books,
      hasErrored : state.booksHasErrored,
      isLoading : state.booksIsLoading,
      order : state.order
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(booksFetchData()),
    addBookToOrder : (bookId, quantity) => dispatch(addBookToOrder(bookId, quantity)),
    deleteBook : (bookId) => dispatch(deleteBookFromOrder(bookId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);