import React, { useEffect } from 'react'
import './FirstAbout.css'

import Aos from 'aos';
import 'aos/dist/aos.css'

const FirstAbout = () => {
    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);

    return(
        <div className='first-about-container' id="firstAbout">
            <div className='first-about' >
                <div className='first-about-text' data-aos="fade-up">
                    <h1>Sou Henrique,</h1>
                    <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou par</p>
                    <p>Some pages require fetching external data for pre-rendering. There are two scenarios, and one or both might apply. In each case, you can use a special function Next.js provides:</p>
                </div>
                <div className='first-about-img' data-aos="fade-up">
                    <img src="https://github.com/HenriqueRSouza.png" alt="Henrique Ribeiro"></img>
                </div>
            </div>
        </div>
    );
}

export default FirstAbout;