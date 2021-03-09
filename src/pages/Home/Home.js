import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import FirstAbout from '../../components/FirstAbout/FirstAbout'
import Works from '../../components/Works/Works'
import Resume from '../../components/Resume/Resume'

const Home = () =>{  
        return(
            <>
                <Navbar />
                <FirstAbout />
                <Works />
                <Resume />
            </>
        );
    }


export default Home;