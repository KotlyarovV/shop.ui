import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import {postLogin, postRegistration} from "./actions/RegisterAction";
import {connect} from "react-redux";

class Login extends Component {

    getToken = () => {
      const data = {
          username: this.getLogin.value,
          email: this.getLogin.value,
          password: this.getPassword.value
      };

      this.props.postData(data);
    };


    render() {

        const style = {
            textAlign : 'center'
        };

        const linkStyle = {
            textDecoration: 'none',
            padding: '20px'
        };

        const loginForm = (<div style={style}>
            <label>Логин</label><br/>
            <input type={'text'} ref={(input) => this.getLogin = input}/><br/>
            <label>Пароль</label><br/>
            <input type={'password'} ref={(input) => this.getPassword = input}/><br/>
            <button onClick={this.getToken}>Войти</button><br/>

            <br/>
            <br/>
            <Link style={linkStyle} to='/registration'>Зарегистрироваться</Link>

        </div>);

        if (this.props.user) {
            const userStyle = {
              textAlign: 'center'
            };
            return (
                <Redirect to='/person' />
            )
        }

        return loginForm;
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        postData: (data) => dispatch(postLogin(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);