import React, { useEffect } from 'react'
import './Resume.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Resume = () => {
    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);

    return(
        <div className='resume-container'>
            <div className='resume' data-aos="fade-right">
                <h1>Currículo</h1>

                <h2>Experiências de trabalho</h2>

                <p>Twitch</p>
                <p>Streamer diário todos os dias da 8 ao 12 da manhã</p>

            </div>
        </div>
    );
}

export default Resume;