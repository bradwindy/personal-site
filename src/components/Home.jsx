import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import me from './images/me.png';

const colStyle = {
    backgroundColor: "#fafafa",
    height: "100%"
};

const heightStyle = {
    height: "100%"
};

const widthStyle = {
    width: "100%"
};

const contStyle = {
    height: "100%",
};

class Home extends Component {
    render() {
        return (
            <div className="container-fluid no-gutters p-0 m-0" style={contStyle}>
                <div className="row no-gutters" style={heightStyle}>
                    <div className="col-sm-3" style={colStyle}>
                        <img className="ml-5 mr-5 mt-5" width="40%" src={me} alt="Head shot of me"/>
                        <h2 className="font-weight-bold mt-4 ml-5 mr-5">Bradley Windybank</h2>
                        <div className="col-sm-6 ml-5 p-0">
                            <a className="btn btn-outline-secondary mt-4" href="/projects"><FontAwesomeIcon
                                icon="code"/> Projects</a>
                            <a className="btn btn-outline-danger mt-2" href="/"><FontAwesomeIcon icon="file-pdf"/> View
                                CV PDF</a>
                        </div>
                    </div>
                    <div className="col p-5" style={widthStyle}>
                        <div className="card-columns">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold">Development Experience</h5>
                                    <p className="card-text">
                                        This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold">Group Experience</h5>
                                    <p className="card-text">
                                        This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This card has supporting text below as a natural
                                        lead-in to additional content.</p>
                                    <p className="card-text">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                            <div className="card bg-primary text-white text-center p-3">
                                <blockquote className="blockquote mb-0">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                        erat.</p>
                                    <footer className="blockquote-footer text-white">
                                        <small>
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                        </small>
                                    </footer>
                                </blockquote>
                            </div>
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This card has a regular title and short paragraphy of text
                                        below it.</p>
                                    <p className="card-text">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..."/>
                            </div>
                            <div className="card p-3 text-right">
                                <blockquote className="blockquote mb-0">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                        ante.</p>
                                    <footer className="blockquote-footer">
                                        <small className="text-muted">
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                        </small>
                                    </footer>
                                </blockquote>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is another card with title and supporting text below.
                                        This card has some additional content to make it slightly taller overall.</p>
                                    <p className="card-text">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;