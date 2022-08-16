import React from 'react';
import '../css/section4.css';
import collection from '../css/images/IMG_7996.jpeg';

function Section4(props) {
    return (
        <section className="section-4-section-4 box">
            <h1 className="section-4-side-hustle">Side Hustle</h1>
            <div className="section-4-hustle-container">
                <iframe className="section-4-video" title="YouTube" width="560" height="315" frameBorder="0" allowFullScreen
                    src="https://youtube.com/embed/3rPuE7EnroE"> </iframe>
                <iframe className="section-4-video" title="YouTube" width="560" height="315" frameBorder="0" allowFullScreen
                    src="https://youtube.com/embed/4OGHx4rglWw"> </iframe>
                <iframe className="section-4-video" title="YouTube" width="560" height="315" frameBorder="0" allowFullScreen
                    src="https://www.youtube.com/embed/E_NFQi0wDxE"></iframe>
                <iframe className="section-4-video" title="YouTube" width="560" height="315" frameBorder="0" allowFullScreen
                    src="https://youtube.com/embed/IHTSKcq_E2M"> </iframe>
            </div>
            <div className="section-4-collection-container">
                <img className="section-4-collection" src={collection} alt="Collection" />
            </div>
        </section>
    );
}

export default Section4;