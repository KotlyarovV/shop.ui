import React from "react";

function Book(props) {
    const productStyle = {
        color : 'black',
        borderStyle : 'solid',
        borderRadius : '5px',
        borderColor : 'green',
        padding : '2px 16px',
        width : '160px',
        height : '300px',
        margin : '10px'
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
        <div style={productStyle} onClick={props.onClick}>
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