import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../css/carousel.css';
import Projects from '../projects/projects';
import portfolio from '../css/images/Screen Shot 2022-08-05 at 11.05.10 AM.png';
import observatory from '../css/images/175699049-afff3ee9-6ddc-4866-b24a-5c3404411269 (1).png';
import helloWorld from '../css/images/182655998-55985a44-5676-4e29-9ca0-3f49efcb76a2.png';
import gitzCarlton from '../css/images/frontpage (2).png';

function Carousel(props) {
    return (
        <section>
            <nav className="carousel">
                <Link to='/projects'>
                    <img src={portfolio} alt="" className="carousel-first-picture" />
                    <img src={observatory} alt="" className="carousel-second-picture" />
                    <img src={helloWorld} alt="" className="carousel-third-picture" />
                    <img src={gitzCarlton} alt="" className="carousel-fourth-picture" />
                    <img src={observatory} alt="" className="carousel-fifth-picture" />
                </Link>
            </nav >
            <div>
                <main className="app-main">
                    <Routes>
                        <Route path='/projects' element={<Projects />} />
                    </Routes>
                </main>
            </div>
        </section >
    );
}

export default Carousel;