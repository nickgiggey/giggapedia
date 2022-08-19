import React from 'react';
import '../css/sideNavBar.css';
import github from "../css/images/png-transparent-black-cat-github-logo-repository-computer-icons-github.png";
import linkedin from "../css/images/linkedin-logo-black-png-linkedin-icon-black-and-white-11562906557v2906x3pr2.png";
import youtube from "../css/images/png-clipart-youtube-computer-icons-youtube-logo-black.png";
import instagram from "../css/images/black-and-white-transparent-background-instagram-logo-11549505158b3f98xnfxt.png";
import facebook from "../css/images/facebook-logo-transparent-black-and-white-11549682037boz6lbuunu.png";
import movieRelics from "../css/images/2CBEFD6C-E977-4E66-A4AF-2A51D3A57474 copy.png";

function SideNav(props) {
    return (
        <section>
            <div className="sideNav-nav-icon">
                <ul className="sideNav-icon-links-container" id="pencil">
                    <button className="sideNav-header-icon-github">
                        <img className="sideNav-github-pic" alt="#" src={github} />
                    </button>
                    <button className="sideNav-header-icon-linkedin">
                        <img className="sideNav-linkedin-pic" alt="#" src={linkedin} />
                    </button>
                    <button className="sideNav-header-icon-youtube">
                        <img className="sideNav-youtube-pic" alt="#" src={youtube} />
                    </button>
                    <button className="sideNav-header-icon-instagram">
                        <img className="sideNav-instagram-pic" alt="#" src={instagram} />
                    </button>
                    <button className="sideNav-header-icon-facebook">
                        <img className="sideNav-facebook-pic" alt="#" src={facebook} />
                    </button>
                    <button className="sideNav-header-icon-movierelics">
                        <img className="sideNav-movierelics-pic" alt="#" src={movieRelics} />
                    </button>
                </ul>
            </div>
        </section>
    );
}

export default SideNav;