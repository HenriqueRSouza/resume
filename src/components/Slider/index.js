import React from "react";
import Carousel, { consts } from "react-elastic-carousel";
import Button from "../Button/index";

import "./Slider.css";



class Slider extends React.Component {
  myArrow({ type, onClick, isEdge }) {
    const pointer =
      type === consts.PREV ? (
        <i class="fas fa-arrow-left"></i>
      ) : (
        <i class="fas fa-arrow-right"></i>
      );
    return (
      <Button
        onClick={onClick}
        disabled={isEdge}
        buttonSize="btn--medium"
        buttonStyle="btn--primary"
      >
        {pointer}
      </Button>
    );
  }

  render() {
    return (
      <Carousel itemsToShow={1} renderArrow={this.myArrow} className="carousell">
        <div className="first-about-text" data-aos="fade-up">
          <h1>Sou Henrique,</h1>
          <p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou par
          </p>
          <p>
            Some pages require fetching external data for pre-rendering. There
            are two scenarios, and one or both might apply. In each case, you
            can use a special function Next.js provides:
          </p>
        </div>
        <div className="first-about-text" data-aos="fade-up">
          <h1>Sou Henrique,</h1>
          <p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou par
          </p>
          <p>
            Some pages require fetching external data for pre-rendering. There
            are two scenarios, and one or both might apply. In each case, you
            can use a special function Next.js provides:
          </p>
        </div>
        <div className="first-about-text" data-aos="fade-up">
          <h1>Sou Henrique,</h1>
          <p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou par
          </p>
          <p>
            Some pages require fetching external data for pre-rendering. There
            are two scenarios, and one or both might apply. In each case, you
            can use a special function Next.js provides:
          </p>
        </div>
      </Carousel>
    );
  }
}

export default Slider;
