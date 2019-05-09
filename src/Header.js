import { Link } from 'react-router-dom'
import React, {Component} from 'react'
import {connect} from "react-redux";


class Header extends Component {

    personSetting() {

    }

    render() {

        const headerStyle = {
            textAlign:'center',
            padding : '40px',
            marginBottom : '10px',
            background: '#1abc9c',
            fontSize: '30px',
            color : 'white',
            textDecoration: 'none'
        };
        const linkStyle = {
            textDecoration: 'none',
            padding: '20px'
        };

        return (
            <header style={headerStyle}>
                <div >
                    <span>Ленина полка</span>
                    <nav >
                        <span>
                            <Link style={linkStyle} to='/'>Книги</Link>
                        </span>
                        <span>
                            <Link style={linkStyle} to='/about'>О нас</Link>
                        </span>
                        <span>
                            <Link style={linkStyle} to='/order'>Корзинка</Link>
                        </span>
                        <span>
                            <Link style={linkStyle} to='/person'>Вход/Регистрация</Link>
                        </span>
                    </nav>
                </div>
            </header>
        );
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

export default connect(mapStateToProps)(Header);