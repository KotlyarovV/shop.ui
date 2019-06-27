import {Link} from 'react-router-dom'
import React, {Component} from 'react'
import {connect} from "react-redux";

class Header extends Component {

    personSetting() {
        console.log('user')
        console.log(this.props.user)
        console.log(this.props.user !== null)
        return this.props.user !== null;
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

        var persSettings = this.personSetting()
            ? { link : '/person', text : "Профиль"}
            : { link : '/login', text : "Вход/Регистрация" };

        console.log(persSettings)

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
                            <Link style={linkStyle} to={persSettings.link}>{persSettings.text}</Link>
                        </span>
                    </nav>
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        books : state.books,
        user : state.user,
        hasErrored : state.booksHasErrored,
        isLoading : state.booksIsLoading
    };
};

export default connect(mapStateToProps)(Header);