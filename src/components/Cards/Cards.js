import React, { useEffect } from 'react'
import './Cards.css'

import Aos from 'aos';
import 'aos/dist/aos.css'

const Cards = () => {
    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);

    return(
        <div className='cards-container'>
            <div className='cards'>
                <ul className="estilizacao">
			        <li data-aos="fade-right">
                        <img src="https://tympanus.net/Tutorials/CaptionHoverEffects/images/2.png" alt=""/>
                        <div className="conteudo">
                            <p className="nome-secao">Musicas</p>
                            <p className="descricao">Melhores musicas</p>
                            {/* <a href="" className="btn-more">Ver mais</a> */}
                        </div>
			        </li>
                    <li data-aos="fade-left"> 
                        <img src="https://tympanus.net/Tutorials/CaptionHoverEffects/images/3.png" alt=""/>
                        <div className="conteudo">
                            <p className="nome-secao">Imagens</p>
                            <p className="descricao">Melhores imagens</p>
                            {/* <a href="" className="btn-more">Ver mais</a> */}
                        </div>
                    </li >
                    <li data-aos="fade-right">
                        <img src="https://tympanus.net/Tutorials/CaptionHoverEffects/images/6.png" alt=""/>
                        <div className="conteudo">
                            <p className="nome-secao">Aplicativos</p>
                            <p className="descricao">Melhores aplicativos</p>
                            {/* <a href="" className="btn-more">Ver mais</a> */}
                        </div>
                    </li>
                    <li data-aos="fade-left">
                        <img src="https://tympanus.net/Tutorials/CaptionHoverEffects/images/6.png" alt=""/>
                        <div className="conteudo">
                            <p className="nome-secao">Aplicativos</p>
                            <p className="descricao">Melhores aplicativos</p>
                            {/* <a href="" className="btn-more">Ver mais</a> */}
                        </div>
                    </li>
                    
		        </ul>
            </div>
        </div>
    );
} 

export default Cards;