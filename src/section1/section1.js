import React from 'react';
import '../css/section1.css';
import '../css/carousel.css';
import Carousel from '../carousel/carousel';

function Section1(props) {
    return (
        <section className="section-1 section-1-box1">
            <Carousel />
        </section>
    );
}

export default Section1;