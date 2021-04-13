import React from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container" id="navbar">
      <div className="navbar">
        <div className="navbar-text">
          <AnchorLink href="#firstAbout">Sobre</AnchorLink>
          <AnchorLink href="#works">Trabalhos</AnchorLink>
          <AnchorLink href="#resume">Experiências</AnchorLink>
          <AnchorLink href="#footer">Contato</AnchorLink>
          <AnchorLink className="back-to-top" href="#navbar"></AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
