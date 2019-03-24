import { Link } from 'react-router-dom'
import React, {Component} from 'react'


export default class Header extends Component {
    render() {
        return (<header>
            <nav>
                <p>
                    <Link to='/'>Home</Link>  ' '
                    <Link to='/about'>About </Link>
                </p>
            </nav>
        </header>);
    }
}
