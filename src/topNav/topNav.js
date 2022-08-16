import React from 'react';
import '../css/topNavBar.css';

function TopNav(props) {
    return (
        <section>
            <div className="topNavBar-navbar">
                <div className="topNavBar-logo">
                    <p className="topNavBar-name">Nicholas Giggey</p>
                    <button className="topNavBar-name-underline color">____________</button>
                </div>
            </div>
            <div className="topNavBar-nav">
                <ul className="topNavBar-links-container">
                    <button className="topNavBar-header-button color">Home</button>
                    <button className="topNavBar-header-button color">Bio</button>
                    <button className="topNavBar-header-button color">Resume</button>
                    <button className="topNavBar-header-button color">Projects</button>
                    <button className="topNavBar-header-button color">Links</button>
                </ul>
            </div>
        </section>
    );
}

export default TopNav;