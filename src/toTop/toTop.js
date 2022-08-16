import React from 'react';
import '../css/topButton.css';
import totop from '../css/images/upgrade.png';

function ToTop(props) {
    // const toTopButton = document.querySelector("#top-button");
    // toTopButton.addEventListener("click", toTop);

    // function toTop() {
    //     window.scrollTo(0, 0);
    // }
    return (
        <section>
            <section>
                <button className="toTop-top-button">
                    <img className="toTop-button-pic" alt="#" src={totop} />
                </button>
            </section>
        </section>
    );
}

export default ToTop;