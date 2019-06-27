import React, {Component} from "react";

export class BookInOrder extends Component {

    changeQuantity = (event) => {
        this.props.onChange(this.props.book.id, event.target.value);
    };

    render() {

        const bookInOrderCardStyle = {
            textAlign: 'center',
            border: '4px=', /* Параметры границы */
            borderStyle: 'solid',
            borderRadius: '5px',
            borderColor: 'green',
        };

        return (
            <div style={bookInOrderCardStyle}>
                {this.props.book.author}<br/>
                {this.props.book.bookName}<br/>
                {this.props.book.price} руб/шт<br/>
                <input
                    type={"number"}
                    min="1"
                    value={this.props.quantity}
                    max="5"
                    onChange={this.changeQuantity}/> шт.
                <br/>
                <button onClick={() => {
                    this.props.onDelete(this.props.book.id)
                }}>Удалить
                </button>
            </div>
        )
    }
}