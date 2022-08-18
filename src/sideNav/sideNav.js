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
                    <a href='https://github.com/nickgiggey' className="sideNav-header-icon-github">
                        <img className="sideNav-github-pic" alt="#" src={github} />
                    </a>
                    <a href='https://www.linkedin.com/in/nicholas-giggey/' className="sideNav-header-icon-linkedin">
                        <img className="sideNav-linkedin-pic" alt="#" src={linkedin} />
                    </a>
                    <a href='https://www.youtube.com/channel/UCI2Gb4A93hpgU240bkF0k8w' className="sideNav-header-icon-youtube">
                        <img className="sideNav-youtube-pic" alt="#" src={youtube} />
                    </a>
                    <a href='https://www.instagram.com/_movie_relics_/' className="sideNav-header-icon-instagram">
                        <img className="sideNav-instagram-pic" alt="#" src={instagram} />
                    </a>
                    <a href='https://www.facebook.com/nicholas.giggey' className="sideNav-header-icon-facebook">
                        <img className="sideNav-facebook-pic" alt="#" src={facebook} />
                    </a>
                    <a href='https://www.movie-relics.com/' className="sideNav-header-icon-movierelics">
                        <img className="sideNav-movierelics-pic" alt="#" src={movieRelics} />
                    </a>
                </ul>
            </div>
        </section>
    );
}

export default SideNav;