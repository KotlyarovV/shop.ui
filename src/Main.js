import React, {Component} from 'react';
import BooksList from './BooksList.js'
import About from './About.js'
import { Switch, Route } from 'react-router-dom'
import store from './store/configureStore'

class Main extends Component {
    render () {
        return (
            <main>
                <Switch>
                    <Route exact path='/' render = {(props) => <BooksList {...props}/>}/>
                    <Route path='/about' render = {(props) => <About {...props} store = {store}/>}/>
                </Switch>
            </main>);
    }
}

export default Main;