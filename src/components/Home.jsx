import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import me from './images/me.png';

const linkStyle = {
    color: "white",

};

class Home extends Component {
    render() {
        return (
            <div className="container-fluid no-gutters p-0 m-0">
                <div className="row no-gutters">
                    <div className="col">

                    </div>
                    <div className="col-xl-10 p-4">
                        <div className="card-columns">
                            <div className="card text-white bg-dark">
                                <div className="card-body">
                                    <img className="ml-3 mt-3" width="30%" src={me} alt="Head shot of me"/>
                                    <h2 className="font-weight-bold mt-4 ml-3">Bradley Windybank</h2>
                                    <h5 className="font-weight-bold pt-3 ml-3">Contact Me:</h5>
                                    <ul className="list-unstyled ml-3">
                                        <li><FontAwesomeIcon icon="envelope"/> : <a href="mailto:trykryda@gmail.com"
                                                                                    style={linkStyle}>trykryda@gmail.com</a>
                                        </li>
                                        <li><FontAwesomeIcon icon="phone"/> : <a href="tel:0221031605"
                                                                                 style={linkStyle}>022 103 1605</a></li>
                                        <li><FontAwesomeIcon icon={['fab', 'facebook-messenger']}/> : <a
                                            href="http://m.me/bradleywindybank"
                                            style={linkStyle}>m.me/bradleywindybank</a></li>
                                    </ul>
                                    <div className=" ml-3 mt-3 pt-3 pb-2">
                                        <a className="btn btn-outline-light mr-2 mb-2" href="/projects"><FontAwesomeIcon
                                            icon="code"/> Projects</a>
                                        <a className="btn btn-outline-danger mb-2"
                                           href="https://drive.google.com/file/d/1iO-tNwraphgUst-2EYcbxPxEZwyHLMi1/view?usp=sharing"><FontAwesomeIcon
                                            icon="file-pdf"/> View
                                            CV PDF</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card text-white bg-dark">
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold"><FontAwesomeIcon icon="laptop"
                                                                                                 color="darkturquoise"/> Development
                                        Experience</h5>

                                    Experience with languages and frameworks such as Java, C, Javascript, Bootstrap, <b>MERN
                                    stack</b>, Python, Dart, Flutter, SQL and
                                    HTML/CSS.<br/><br/>
                                    <b>Two android apps</b> using the Flutter framework, both available on the Play
                                    Store.

                                </div>
                            </div>

                            <div className="card text-white bg-dark">
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold"><FontAwesomeIcon icon="redo-alt"
                                                                                                 color="khaki"/> Agile
                                        Experience</h5>
                                    <p className="card-text">
                                        In my group project within university we used the agile development
                                        method <b>scrum</b>, and worked in sprints to develop our software. This
                                        methodology allowed us to work closely with the client and repeatedly iterate on
                                        the deliverable to produce the final product.
                                    </p>
                                </div>
                            </div>

                            <div className="card text-white bg-dark">
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold"><FontAwesomeIcon icon="code-branch"
                                                                                                 color="greenyellow"/> Version
                                        Control Experience</h5>
                                    <p className="card-text">
                                        <b>Git and GitHub</b> have been used for version control in all my personal and
                                        group projects. I have experience with commits, pushing, merging, merge
                                        conflicts, pull requests and branching.
                                    </p>
                                </div>
                            </div>
                            <div className="card text-white bg-dark">
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold"><FontAwesomeIcon icon="users"
                                                                                                 color="hotpink"/> Group
                                        Experience</h5>
                                    <p className="card-text">
                                        In university I worked in a team environment to develop a web app over 6 weeks.
                                        I learnt how to communicate with others and how to develop in a team
                                        environment.
                                    </p>
                                </div>
                            </div>
                            <div className="card text-white bg-dark">
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold"><FontAwesomeIcon icon="hands-helping"
                                                                                                 color="darksalmon"/> Volunteer
                                        History</h5>
                                    <p className="card-text">
                                        I volunteered for 3 years at my local <b>Hospice shop</b> in Orewa,
                                        Auckland.<br/><br/>
                                        I was a founding member and spent a year working with the <b>Rotary Satellite
                                        Club</b> of Orewa/Millwater. We worked in the local community to organise
                                        fundraisers and other local events.<br/><br/>
                                        I have volunteered on <b>Spirit of NZ</b> as a leading hand, helping out both
                                        trainees and crew with tasks around the ship.

                                    </p>
                                </div>
                            </div>
                            <div className="card text-white bg-dark">
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold"><FontAwesomeIcon icon="camera"
                                                                                                 color="blueviolet"/> Hobbies
                                        and Interests</h5>
                                    <p className="card-text">

                                        <b>Photography: </b>I enjoy taking photos in my spare time, and have taken
                                        several paid photo shoots.<br/><br/>
                                        <b>Graphic Design: </b>I enjoy working on logos, brochures and packaging and
                                        have done so for family and friends.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;