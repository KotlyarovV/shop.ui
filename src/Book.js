import React, {Component} from "react";

//должна быть возможность листать пикчи прмо на карточке
/*
class Book extends Component {

    render() {
        const productStyle = {
            color : 'black',
            borderStyle : 'solid',
            borderRadius : '5px',
            borderColor : 'green',
            padding : '2px 16px',
            width : '160px',
            height : '300px'
    };

        const imageStyle = {
          maxWidth: '100%',
          height: '60%'
        };

        const textStyle = {
          wordWrap : 'break-word'
        };

        const textBlockStyle = {
          textAlign : 'center',
          maxHeight : '40%'
        };

        return (
            <div style={productStyle}>
                <img src={this.props.image} style={imageStyle} />
                <div style={textBlockStyle}>
                    <div style={{
                        fontFamily: "Times New Roman, Times, serif",
                        borderBottom: '1px solid gray'
                    }}>
                        {this.props.author}
                    </div>
                    <div style={{
                        fontFamily: "Times New Roman, Times, serif"}}>
                        {this.props.bookName}
                    </div>
                    <div style={{
                        textDecoration: 'overline',
                        lineHeight : '2',
                        fontWeight : 'bold',
                    }}>
                        {this.props.price} руб.
                    </div>
                </div>
            </div>);
    }
}
*/

function Book(props) {
    const productStyle = {
        color : 'black',
        borderStyle : 'solid',
        borderRadius : '5px',
        borderColor : 'green',
        padding : '2px 16px',
        width : '160px',
        height : '300px'
    };

    const imageStyle = {
        maxWidth: '100%',
        height: '60%'
    };

    const textBlockStyle = {
        textAlign : 'center',
        maxHeight : '40%'
    };

    return (
        <div style={productStyle}>
            <img src={props.image} style={imageStyle} />
            <div style={textBlockStyle}>
                <div style={{
                    fontFamily: "Times New Roman, Times, serif",
                    borderBottom: '1px solid gray'
                }}>
                    {props.author}
                </div>
                <div style={{
                    fontFamily: "Times New Roman, Times, serif"}}>
                    {props.bookName}
                </div>
                <div style={{
                    textDecoration: 'overline',
                    lineHeight : '2',
                    fontWeight : 'bold'
                }}>
                    {props.price} руб.
                </div>
            </div>
        </div>);
}

Book.defaultProps = {
    image : 'noImage.png'
};

export default Book;