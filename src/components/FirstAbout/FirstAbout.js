import React, { useEffect } from "react";
import Aos from "aos";
import Slider from '../Slider/index'

import "./FirstAbout.css";
import "aos/dist/aos.css";

const FirstAbout = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="first-about-container" id="firstAbout">
      <div className="first-about" >
				<Slider/>
      </div>
    </div>
  );
};

export default FirstAbout;
