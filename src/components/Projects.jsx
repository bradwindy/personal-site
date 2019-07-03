import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import reminder_image from './images/reminderplus.png';
import oneroom_image from './images/oneroom.png';
import cart_image from './images/shoppingcart.png';
import gene_image from './images/genetic.png';

const widthStyle = {
    width: "100%"
};


class Projects extends Component {
    render() {
        return (
            <div className="col" style={widthStyle}>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="btn btn-outline-light float-left font-weight-bold" href="/"><FontAwesomeIcon
                        icon="arrow-left"/> Back Home</a>
                </nav>

                <div className="container">
                    <div className="card-deck mt-5">
                        <div className="card text-white bg-dark">
                            <img src={reminder_image} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">Reminder+ App</h5>
                                <p className="card-text">A reminder app created as a personal project, has features such
                                    categories and local notifications.</p>
                                <ul className="list-unstyled">
                                    <li><b>Language:</b> Dart</li>
                                    <li><b>Framework:</b> Flutter</li>
                                    <li><b>Platforms:</b> Android (iOS soon)</li>
                                </ul>
                                <a href='https://play.google.com/store/apps/details?id=plus.reminder.reminderplus&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img
                                    width="70%" alt='Get it on Google Play'
                                    src='https://i.ibb.co/mqtYmW4/en-badge-web-generic.png'/></a>
                                <a className="btn btn-outline-light float-left font-weight-bold mt-2"
                                   href="https://github.com/bradwindy/reminderplus"><FontAwesomeIcon
                                    icon={['fab', 'github']}/> View on GitHub</a>
                            </div>
                        </div>
                        <div className="card text-white bg-dark">
                            <img src={oneroom_image} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">OneRoom Website</h5>
                                <p className="card-text">A full stack room booking website that works for both mobile
                                    and
                                    desktop. Part of a group project in University.</p>
                                <ul className="list-unstyled">
                                    <li><b>Language:</b> Javascript</li>
                                    <li><b>Frameworks:</b> Node.js, React, MongoDB, Express.js</li>
                                    <li><b>Platform:</b> Web</li>
                                </ul>
                                <a className="btn text-info btn-outline-info float-left font-weight-bold"
                                   href="https://one-room-bookings.herokuapp.com/login"><FontAwesomeIcon
                                    icon="mobile-alt"/> <FontAwesomeIcon icon="desktop"/> Visit Project</a>
                                <a className="btn btn-outline-light float-left font-weight-bold mt-2"
                                   href="https://github.com/bradwindy/OneRoom"><FontAwesomeIcon
                                    icon={['fab', 'github']}/> View on GitHub</a>
                            </div>
                        </div>
                        <div className="card text-white bg-dark">
                            <img src={cart_image} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">Shopping Website</h5>
                                <p className="card-text">A full stack shopping website with cart and local interface for
                                    product data entry. Part of a project in University.</p>
                                <ul className="list-unstyled">
                                    <li><b>Languages:</b> HTML, Java, Javascript, Angular, SQL</li>
                                    <li><b>Platforms:</b> Web + Java Program</li>
                                </ul>
                                <a className="btn btn-outline-light float-left font-weight-bold mt-2"
                                   href="/"><FontAwesomeIcon
                                    icon={['fab', 'github']}/> View on GitHub</a>
                            </div>
                        </div>
                        <div className="card text-white bg-dark">
                            <img src={gene_image} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">Genetic Algorithm</h5>
                                <p className="card-text">Code from a genetic algorithm assignment written to optimise
                                    the
                                    fitness of a species of creatures in a simulated two-dimensional world.</p>
                                <ul className="list-unstyled">
                                    <li><b>Language:</b> Python</li>
                                    <li><b>Framework:</b> Anaconda</li>
                                </ul>
                                <a className="btn btn-outline-light float-left font-weight-bold mt-2"
                                   href="https://gist.github.com/bradwindy/ac7709f035ae31a92803c15b4f51aaef"><FontAwesomeIcon
                                    icon={['fab', 'github']}/> View Gist</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;