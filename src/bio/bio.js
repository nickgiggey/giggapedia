import React from 'react';
import '../css/bio.css';
import background from '../css/images/16729021_10212051733473660_3780826532518628008_n.jpeg';
import background2 from '../css/images/602599_4394089375416_176311673_n.jpeg';

function Bio(props) {
    return (
        // <section className="bio-section-1">
        //     <div className="bio-wrapper">
        //         {/* <div className="bio-section-1"> */}
        //             <img className="bio-first-pic" src={background} alt="" />
        //             <p className="bio-first-paragraph">This wouldn't be a proper bio if I didn't immediately point out that I owe everything of who I am today to my family. I am lucky to be married to the beautiful Amy Giggey and has given our family two amazing boys, Jaxon and Hudson.</p>
        //         {/* </div> */}
        //     </div>
        //     <div className="bio-section-2">
        //         <div className="bio-section-2">
        //             <img className="bio-second-pic" src={background2} alt="" />
        //             <p className="bio-second-paragraph">I started my journey in the US Army straight out of high school which turned out to be one of the most defining periods of my life. I was lucky enough to serve two deployments to Afghanistan with the greatest people put on this earth. </p>
        //         </div>
        //     </div>
        //     <div className="bio-section-3">
        //         <div className="bio-section-3">
        //             <img className="bio-third-pic" src="" alt="" />
        //             <p className="bio-third-paragraph">Nicholas Giggey</p>
        //         </div>
        //     </div>
        // </section>
        <section className="bio-section-1 box1">
            <div className="bio-wrapper">
                <img className="bio-one" src={background} alt="" />
                <img className="bio-two" src={background2} alt="" />
                <div className="bio-five">
                    <div className="bio-lo-res">
                        <p className="bio-first-paragraph">This wouldn't be a proper bio if I didn't immediately point out that I owe everything of who I am today to my family. I am lucky to be married to the beautiful Amy Giggey and has given our family two amazing boys, Jaxon and Hudson.</p>
                    </div>
                </div>
                <div className="bio-six">
                    <div className="bio-lo-restwo">
                        <p className="bio-second-paragraph">I started my journey in the US Army straight out of high school which turned out to be one of the most defining periods of my life. I was lucky enough to serve two deployments to Afghanistan with the greatest people put on this earth.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Bio;