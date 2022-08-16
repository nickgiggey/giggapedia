import React from 'react';
import '../css/projects.css';

function Projects(props) {
    return (
        <section className="projects-section-1 box1">
            <div className="projects-wrapper">
                <a href="https://willowy-piroshki-c2f5db.netlify.app/" className="projects-one">
                </a>
                <a href="https://hello-world-travel.netlify.app/" className="projects-two">
                </a>
                <a href="https://giggapedia.netlify.app/" className="projects-three">
                </a>
                <a href="https://cozy-gnome-816bc0.netlify.app/" className="projects-four">
                </a>
                <div className="projects-five">
                    <div className="projects-lo-res">
                        <h1 className="projects-banner-text">
                            The Observatory: Front End - React/React Router - NASA Pod API
                        </h1>
                    </div>
                </div>
                <div className="projects-six">
                    <div className="projects-lo-restwo">
                        <h1 className="projects-banner-texttwo">
                            Hello World: Front End - React/Router - Local Storage - Google Maps API - React Geocode
                        </h1>
                    </div>
                </div>
                <div className="projects-seven">
                    <div className="projects-lo-resthree">
                        <h1 className="projects-banner-textthree">
                            Portfolio: React/Router - CSS
                        </h1>
                    </div>
                </div>
                <div className="projects-eight">
                    <div className="projects-lo-resfour">
                        <h1 className="projects-banner-textfour">
                            Gitz Carlton: CRUD - MERN - React/Router - Mongoose/MongoDB - Express - Heroku - Axios - Node.js
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;