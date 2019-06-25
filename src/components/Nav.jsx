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
                    <form className="form-inline">
                        <a className="btn btn-outline-primary float-left mr-2" href="/about">About Me</a>
                        <a className="btn btn-outline-primary float-left mr-2" href="/projects">Projects</a>
                        <a className="btn btn-outline-danger float-left" href="/"><FontAwesomeIcon
                            icon="file-pdf"/> View CV PDF</a>
                    </form>

                </nav>
            </header>
        );
    }
}

export default Nav;