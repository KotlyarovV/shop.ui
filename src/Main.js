import React, {Component} from 'react';
import BooksList from './BooksList.js'
import About from './About.js'
import { Switch, Route } from 'react-router-dom'
import store from './store/configureStore'
import RegistrationForm from './RegistrationForm'
import Order from './Order'
import Login from './Login'
import Profile from "./Profile";

class Main extends Component {
    render () {
        return (
            <main>
                <Switch>
                    <Route exact path='/' render = {(props) => <BooksList {...props}/>}/>
                    <Route path='/about' render = {(props) => <About {...props} store = {store}/>}/>
                    <Route path='/registration' render = {(props) => <RegistrationForm/>}/>
                    <Route path='/login' render={(props) => <Login/>}/>
                    <Route path='/person' render={(props) => <Profile {...props}/>}/>
                    <Route path='/order' render={(props) => <Order {...props}/>}/>
                </Switch>
            </main>);
    }
}

export default Main;