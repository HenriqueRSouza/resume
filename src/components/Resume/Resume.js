import React, { useEffect } from "react";
import "./Resume.css";

import Aos from "aos";
import "aos/dist/aos.css";

const Resume = () => {
  useEffect(() => {
    Aos.init({ 
			duration: 4000,
		});
  }, []);

  return (
    <div className="resume-container" id="resume">
      <div className="resume" >
        <h1 data-aos="fade-right">Experiências</h1>
        <div className="resume-text-container">
          <div className="resume-text" data-aos="fade-right">
            <h1>Currículo</h1>

            <h2>Experiências de trabalho</h2>

            <p>Twitch.tv/hik3lost</p>
            <p>Streamer diário todos os dias da 8 ao 12 da manhã</p>

            <h2>Twitch</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
          <div className="resume-last-text" data-aos="fade-right">
            <h1>Currículo</h1>

            <h2>Experiências de trabalho</h2>

            <p>Twitch.tv/hik3lost</p>
            <p>Streamer diário todos os dias da 8 ao 12 da manhã</p>

            <h2>Twitch</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
