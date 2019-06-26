import React, { Component } from 'react';

const divStyle = {
    height: "100%"
};

class Root extends Component {
    render() {
        return (
            // this is the root component and will always be rendered. Contains the nav element.
            <div style={divStyle}>
                {/* this.props.children is the element that is rendered inside the root element in app.js
                this element depends on the page route. So if you were visiting /login , the login element will be
                passed here and then displayed*/}
                <div className="row align-items-center no-gutters" style={divStyle}>
                    <div className="col no-gutters" style={divStyle}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Root;


