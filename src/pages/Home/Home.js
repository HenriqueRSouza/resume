import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import FirstAbout from '../../components/FirstAbout/FirstAbout'
import Works from '../../components/Works/Works'
import Resume from '../../components/Resume/Resume'
import Footer from '../../components/Footer/Footer'

const Home = () =>{  
        return(
            <>
                <Navbar />
                <FirstAbout />
                <Works />
                <Resume />
                <Footer />
            </>
        );
    }


export default Home;