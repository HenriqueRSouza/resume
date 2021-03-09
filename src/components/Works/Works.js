import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

import Cards from '../Cards/Cards'

import './Works.css'

const Works = () => {
    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);

    return(
        <div className="works-container">
            <div className='works'>
                <div className="works-cards">
                    <h1 data-aos="fade-right" id='text'>Meus Trabalhos</h1>
                    <Cards />
                </div>
            </div>
        </div>
    );
}

export default Works;   