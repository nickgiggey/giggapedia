import React from 'react';
import '../css/bio.css'
import background from '../css/images/16729021_10212051733473660_3780826532518628008_n.jpeg'
import background2 from '../css/images/602599_4394089375416_176311673_n.jpeg'

function Bio(props) {
    return (
        <section className="bio-body-container">
            <div className="bio-section-1">
                <h1 className="bio-section-1-h1">
                    <img className="bio-first-pic" src={background} alt="" />
                </h1>
                <p className="bio-first-paragraph">This wouldn't be a proper bio if I didn't immediately point out that I owe everything of who I am today to my family. I am lucky to be married to the beautiful Amy Giggey and has given our family two amazing boys, Jaxon and Hudson.</p>
            </div>
            <div className="bio-section-2">
                <h1 className="bio-section-1-h1">
                    <img className="bio-second-pic" src={background2} alt="" />
                </h1>
                <p className="bio-second-paragraph">I started my journey in the US Army straight out of high school which turned out to be one of the most defining periods of my life. I was lucky enough to serve two deployments to Afghanistan with the greatest people put on this earth. </p>
            </div>
            <div className="bio-section-3">
                <h1 className="bio-section-3-h1">
                    <img className="bio-third-pic" src="" alt="" />
                </h1>
                <p className="bio-third-paragraph">Nicholas Giggey</p>
            </div>
        </section>
    );
}

export default Bio;