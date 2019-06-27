import React, {Component} from "react";
import {connect} from "react-redux";
import {addBookToOrder, deleteBookFromOrder, sendOrder} from "./actions/OrderActions";
import {BookInOrder} from "./BookInOrder";

const textCenter = {
    textAlign: 'center',
    width : '50%'
};

const cardsStyle = {
    display : 'flex',
    paddingLeft:'50px'
};

class Order extends Component{
    constructor(props) {
        super(props);
        this.state = {useUserAddress : false}
    }

    formOrder = () => {
        const formedOrder = {
            order : this.props.order,
            email : ((this.props.user ? this.props.user.email : this.getEmail.value)),
            address : this.getAddress.value,
            country : this.getCountry.value,
            city : this.getCity.value,
            zip : this.getIndex.value
        };

        this.props.sendOrder(formedOrder);
    };

    updateBooks = (bookId, newNumber) => {
        this.props.addBookToOrder(bookId, newNumber);
        this.setState({...this.state});
    };

    deleteBook = (bookId) => {
        this.props.deleteBook(bookId);
        this.setState({...this.state});
    };

    createAddressFields = () => {
        const defaultValues = {
            city : ((this.props.user ? this.props.user.profile.city : '')),
            country : ((this.props.user ? this.props.user.profile.country : '')),
            address : ((this.props.user ? this.props.user.profile.address : '')),
            zip : ((this.props.user ? this.props.user.profile.zip : ''))
        };

        return (
              <div>
                  <label>Страна</label><br/>
                  <input type={'text'} style={textCenter} defaultValue={defaultValues.country} ref={(input) => this.getCountry = input}/><br/>
                  <label>Город</label><br/>
                  <input type={'text'} style={textCenter} defaultValue={defaultValues.city} ref={(input) => this.getCity = input}/><br/>
                  <label>Аддрес (улица, номер дома, кваритра)</label><br/>
                  <input type={'textarea'} style={textCenter} defaultValue={defaultValues.address} ref={(input) => this.getAddress = input}/><br/>
                  <label>Почтовый индекс</label><br/>
                  <input type={'text'} style={textCenter} defaultValue={defaultValues.zip} ref={(input) => this.getIndex = input}/><br/>
              </div>
        );
    };

    createOrderInfo = () => {
      if (!this.props.user)  {
          return (
              <div>
                  <br/>
                  <div style={{textAlign:'center'}}>
                      Зарегистрируйтесь на сайте, чтобы не вводить свой адрес повторно.
                  </div>
                  <div style={{textAlign:'center'}}>
                    <label>Email</label><br/>
                    <input type={'textarea'} style={textCenter} ref={(input) => this.getEmail = input}/><br/>
                  </div>
                  <br/>
                  <div style={{textAlign:'center'}}>
                      {this.createAddressFields()}
                  </div>
              </div>
          );
      }
      else {
       return (
           <div>
               <div style={{textAlign:'center'}}>
                   {this.createAddressFields()}
               </div>
           </div>)
       }
    };

    render() {

        const booksInOrder = this.props.order.map((b) => {
            return {book : this.props.books.find(book => book.id === b.book), quantity :b.quantity}
        });

        if (booksInOrder.length === 0) {
            return (
                <div style={{textAlign:'center'}}>
                    Вы еще не сделали заказ
                </div>
            )
        }

        const booksInOrderComponents = booksInOrder.map(b =>
            <BookInOrder
                {...b}
                onChange={this.updateBooks}
                onDelete={this.deleteBook}
            />);

        const sum = booksInOrder.length === 0
            ? 0
            : booksInOrder.reduce((value, bookInOrder) => {
                    return bookInOrder.book.price * bookInOrder.quantity + value;
                }, 0);

        return (
            <div style={{paddinBottom : '100px', marginBottom : '100px'}}>
               <div style={cardsStyle}>
                   {booksInOrderComponents}
               </div>
                <div style={{textAlign : 'center'}}>
                   Полная сумма заказа {sum} руб
                </div>
                <div>
                    {this.createOrderInfo()}
                </div>
                <br/>
                <div style={{textAlign : 'center'}}>
                    <button onClick={this.formOrder}>Отправить</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.user,
        books : state.books,
        order : state.order
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addBookToOrder : (bookId, quantity) => dispatch(addBookToOrder(bookId, quantity)),
        deleteBook : (bookId) => dispatch(deleteBookFromOrder(bookId)),
        sendOrder : (order) => dispatch(sendOrder(order))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);