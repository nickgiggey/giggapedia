import React from 'react';
import '../css/section2.css';
import Typewriter from 'typewriter-effect';

function Section2(props) {
    return (
        <section className="section-2 section-2-box">
            <div className="section-2-wrapper">
                <div className="section-2-one">
                    <div className="section-2-container">
                        <span className="section-2-welcome">Welcome</span>
                    </div>
                </div>
                <div className="section-2-two">
                    <div className="section-2-animation-container">
                        <div className="section-2-top">
                            <div className="section-2-back"></div>
                        </div>
                        <div className="section-2-bottom">
                            <div className="section-2-moving-floor"></div>
                        </div>
                        <div className="section-2-text">
                            <h1 className="section-2-intro-title">Nick Giggey's</h1>
                            <h1 className="section-2-portfolio">Portfolio</h1>
                            <p className="section-2-stuff">The Place Where You Go To Learn More About Me and Stuff</p>
                        </div>
                    </div>
                </div>
                <div className="section-2-three">
                    <article className="section-2-column-item-1">
                        <h1 className="section-2-typewriter">
                            <Typewriter
                                options={{
                                    strings: ['Technical Skillsets'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /></h1>
                        <ul className="section-2-design-container">
                            <li className="section-2-words">AJAX</li>
                            <li className="section-2-words">Axios</li>
                            <li className="section-2-words">Bcrypt</li>
                            <li className="section-2-words">CSS</li>
                            <li className="section-2-words">CRUD</li>
                            <li className="section-2-words">Express</li>
                            <li className="section-2-words">GitHub</li>
                            <li className="section-2-words">GoogleMaps API</li>
                            <li className="section-2-words">Heroku</li>
                            <li className="section-2-words">JavaScript</li>
                            <li className="section-2-words">JQuery</li>
                            <li className="section-2-words">Local Storage</li>
                            <li className="section-2-words">MERN Stack</li>
                            <li className="section-2-words">MongoDB</li>
                            <li className="section-2-words">Mongoose</li>
                            <li className="section-2-words">NASA API</li>
                            <li className="section-2-words">React</li>
                            <li className="section-2-words">React Router</li>
                            <li className="section-2-words">React Geocode</li>
                        </ul>
                    </article>
                </div>
                <div className="section-2-four" />
            </div>
        </section>
    );
}

export default Section2;