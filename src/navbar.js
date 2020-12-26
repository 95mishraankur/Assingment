import React, { Component } from 'react';
import {BrowserRouter as Link} from 'react-router-dom';

class Header extends Component {
    render(){
        return (
            <ul>
                <li>
                    <Link to="/planet">planet</Link>
                </li>
                <li>
                    <Link to="/Fav">Fav</Link>
                </li>
            </ul>
        )
    }
}
export default Header;