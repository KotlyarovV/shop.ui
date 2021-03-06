import React, {Component} from "react";
import {fetchUser} from "./actions/RegisterAction";
import {connect} from "react-redux";

function getPtimatyKeyFromLink(link) {
    return link.substring(link.length - 37, link.length-1)
}

class Profile extends Component {

    componentDidMount() {
        console.log(this.props);

        if (this.props.user) {
            const key = getPtimatyKeyFromLink(this.props.user.url)
            this.props.fetchUser(key);
        }
    }

    render() {
        if (this.props.user == null) {
            return (
                <div>
                    Вы не авторизованы!<br/>
                    Пожалуйста, авторизуйтесь или зарегистрируйтесь!
                </div>
            );
        }

        const userStyle = {
          textAlign : 'center'
        };

        console.log(this.props.user)
        return (
            <div style={userStyle}>
                {this.props.user.last_name + ' ' + this.props.user.first_name}<br/>
                {this.props.user.email}<br/>
                Адрес : {this.props.user.profile.address}<br/>
                Страна : {this.props.user.profile.country}<br/>
                Город : {this.props.user.profile.city}<br/>
                Дата рождения : {this.props.user.profile.dob}<br/>
                Почтовый индекс : {this.props.user.profile.zip}<br/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);