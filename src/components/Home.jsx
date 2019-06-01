import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center pt-3 mt-5">
                    <h2 className="text-center font-weight-bold">Hi, I'm Bradley :)</h2>
                </div>
                <div className="row justify-content-center mb-3">
                    <h4 className="text-center">Check out my projects or read more about me</h4>
                </div>
                <div className="row justify-content-center">
                    <a className="btn btn-primary float-left mr-2" href="/about">About Me</a>
                    <a className="btn btn-outline-primary float-left" href="/projects">Projects</a>
                </div>
            </div>
        );
    }
}

export default Home;