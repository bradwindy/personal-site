import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Nav extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand font-weight-bold" href="/">
                        Bradley Windybank
                    </a>
                </nav>
            </header>
        );
    }
}

export default Nav;