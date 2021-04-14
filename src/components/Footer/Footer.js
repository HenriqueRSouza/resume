import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="footer-container" id="footer">
      <div className="footer">

				<form className="input-footer">
					<h2>Mande uma mensagem !</h2>
					<input type='text' placeholder="Nome"></input>
					<input type='text' placeholder="Email"></input>
					<textarea placeholder="Seu texto"></textarea>
					<button>Enviar</button>
				</form>

        <h1>Henrique Ribeiro</h1>
        <small className="website-rights">Henrique © 2020</small>

        <div className="social-icons">
          <Link
            className="social-icon-link facebook"
            to="/"
            target="_blank"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f" />
          </Link>
          <Link
            className="social-icon-link instagram"
            to="/"
            target="_blank"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram" />
          </Link>
          <Link
            className="social-icon-link youtube"
            to="/"
            target="_blank"
            aria-label="Youtube"
          >
            <i className="fab fa-youtube" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
