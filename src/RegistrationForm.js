import React, {Component} from "react";
import {booksFetchData} from "./actions/BookActions";
import {connect} from "react-redux";
import {postRegistration} from "./actions/RegisterAction";




class RegistrationForm extends Component {

    validate = () => {

        let result = true;
        let message = "";
        const re = /\S+@\S+\.\S+/;
        const emailValidationResult = re.test(this.getEmail.value);
        if (!emailValidationResult) {
            result = emailValidationResult;
            message += "Введите валидный email\n";
        }

        const password = this.getPassword.value;
        const password1 = this.getPassword1.value;
        const passwordSameValidation = password !== password1;
        if (passwordSameValidation) {
            result = passwordSameValidation;
            message += "Пароли должны совпадать\n"
        }

        if (!password) {
            result = false;
            message += "Пароль должен быть введен\n"
        }

        if (!this.getName.value) {
            result = false;
            message += "Введите имя\n"
        }

        if (!this.getLastName.value) {
            result = false;
            message += "Введите фамилию\n"
        }

        if (!this.getCity.value) {
            result = false;
            message += "Введите город\n"
        }

        if (!this.getCountry.value) {
            result = false;
            message += "Введите страну\n"
        }

        if (!this.getAddress.value) {
            result = false;
            message += "Введите адрес\n"
        }

        const index = this.getIndex.value;
        if (!index) {
            result = false;
            message += "Введите индекс\n"
        }

        if (!result) {
            alert(message);
        }
        return result;
    };

    send = () => {
      //  if (!this.validate()) {
        //    return
        //};
        const data = {
            email : this.getEmail.value,
            first_name : this.getName.value,
            last_name : this.getLastName.value,
            password : this.getPassword.value,
            profile : {
                dob : this.getBirthDate.value,
                address : this.getAddress.value,
                country : this.getCountry.value,
                city : this.getCity.value,
                zip : this.getIndex.value
            }
        };
        console.log(data);
        this.props.postData(data);
    };


    render() {
        const formStyle = {
            display : 'flex',
            flexDirection : 'column',
            textAlign : 'center',
            paddingLeft:'35%',
            paddingRight:'35%',
            marginBottom: '50px'
        };
        const textCenter = {
          textAlign: 'center'
        };

        return (
            <div style={formStyle}>
                <label>Email</label>
                <input type={'email'} style={textCenter} ref={(input) => this.getEmail = input}/>
                <label>Фамилия</label>
                <input type={'text'} style={textCenter} ref={(input) => this.getLastName = input}/>
                <label>Имя</label>
                <input type={'text'} style={textCenter} ref={(input) => this.getName = input}/>
                <label>Пароль</label>
                <input type={'password'} style={textCenter} ref={(input) => this.getPassword = input}/>
                <label>Повторите пароль</label>
                <input type={'password'} style={textCenter} ref={(input) => this.getPassword1 = input}/>
                <label>Дата рождения</label>
                <input type={'date'} ref={(input) => this.getBirthDate = input}/>
                <label>Страна</label>
                <input type={'text'} style={textCenter} ref={(input) => this.getCountry = input}/>
                <label>Город</label>
                <input type={'text'} style={textCenter} ref={(input) => this.getCity = input}/>
                <label>Аддрес (улица, номер дома, кваритра)</label>
                <input type={'textarea'} ref={(input) => this.getAddress = input}/>
                <label>Почтовый индекс</label>
                <input type={'text'} style={textCenter} ref={(input) => this.getIndex = input}/>
                <br/>
                <button onClick={this.send}>Зарегистрироваться</button>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        postData: (data) => dispatch(postRegistration(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);