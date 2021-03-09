import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return(
        <div className='navbar-container'>
            <div className='navbar'>
                <Link>Trabalhos</Link>
                <Link>Portifólio</Link>
                <Link>Sobre</Link>
                <Link>Contato</Link>
            </div>
        </div>
    );
}

export default Navbar