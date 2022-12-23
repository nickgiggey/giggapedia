import React from 'react';
import '../css/section1.css';
import '../css/carousel.css';
import Carousel from '../carousel/carousel';
import Carousel2 from '../carousel/carousel2';

function Section1(props) {
    return (
        <section className="section-1">
            <div className="section-1-text">
                Completed Projects
            </div>
            <div className="section-1-text2">
                Work In Progress Projects
            </div>
            <div className="section-1-carousel">
                <div className="section-1-box1">
                    <Carousel />
                </div>
                <div className="section-1-box2">
                    <Carousel2 />
                </div>
            </div>
        </section>
    );
}

export default Section1;