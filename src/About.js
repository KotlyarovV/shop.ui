import React, {Component} from 'react';
import {connect} from 'react-redux'


class About extends Component {
    render() {
        return (
            <div style={{textAlign:'center', width : '70%', paddingLeft : '15%'}}>
                Наш интернет-магазин Ленина полка предоставляет огромный выбор литературы на любой вкус. Мы ответим Вам на различные вопросы, которые у вас возникнут. Так же мы готовы отправить вам посылку по тому адресу, который вы нам сообщите, после того как мы предварительно свяжемся с вами по электронной почте.
            </div>);
    }
}

export default About
