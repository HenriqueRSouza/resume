import React, { useState, useEffect } from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar-container" id="navbar">
      <div className="navbar">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <AnchorLink href="#firstAbout" onClick={closeMobileMenu}>Sobre</AnchorLink>
            <AnchorLink href="#works" onClick={closeMobileMenu}>Trabalhos</AnchorLink>
            <AnchorLink href="#resume" onClick={closeMobileMenu}>Experiências</AnchorLink>
            <AnchorLink href="#footer" onClick={closeMobileMenu}>Contato</AnchorLink>
          </li>
        </ul>
        
        <div className="back-to-top" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
