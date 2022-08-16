import React from 'react';
import '../css/body.css';
import Section1 from '../section1/section1';
import Section2 from '../section2/section2';
import Section3 from '../section3/section3';
import Section4 from '../section4/section4';
import ToTop from '../toTop/toTop';

function Home() {
    return (
        <div className="home-container">
            <div className="body-container">
                <ToTop />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
            </div>
        </div>
    );
}

export default Home;