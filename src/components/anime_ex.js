import React from "react";
import anime from 'animejs/lib/anime.es.js';

import 'bootstrap/dist/css/bootstrap.min.css';
export default function Animeex() {

    var roundLogEl = document.querySelector('.mypic');


    anime({
        targets: 'div',

        translateX: 250,
        direction: 'alternate',
        easing: 'easeInOutSine'
    });

    return (

        <div className="mypic">
            10
        </div>

    )
}
