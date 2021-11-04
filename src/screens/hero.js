import React from 'react';
import PropTypes from 'prop-types';
import king from '../jaden.png';
import edge from '../edge.png';
import devil from '../devil.png';
import gaia from '../gaia.png';
import styled from 'styled-components';
import bane from '../bane.png';
import { Link } from 'react-router-dom';

const Hero = props => {
    return (
        <div>
            <Ecriture>
            <p>Les personnages Important</p>
            
            <p>supreme king</p>
            <Images src={king}>
            </Images>
            <br/>
            <button onClick={() => window.open('https://yugioh.fandom.com/wiki/The_Supreme_King')}>Description</button>
            <br/>
            <p>Apparait Lame Malveillante, Héros du mal</p>
                
            <Images src={edge}>
            </Images>
            <br/>
            <button onClick={() => window.open('https://www.otk-expert.fr/yugioh/cartes/evil-hero-malicious-edge/')}>Carte</button>
            <br/>
            <p>Voici les ténébres en personne, Démon Malveillant, Héros du mal</p>
            <Images src={devil}>
            </Images>
            <br/>
            <button onClick={() => window.open('https://www.otk-expert.fr/yugioh/cartes/demon-malveillant-heros-du-mal/')}>Carte</button>
            <br/>
            <p>Montre toi, Gaia Sombre, Héros du mal</p>
            <Images src={gaia}>
            </Images>
            <br/>
            <button onClick={() => window.open('https://www.otk-expert.fr/yugioh/cartes/evil-hero-dark-gaia/')}>Carte</button>
            <br/>
            <p>Leves-toi, Fléau Malveillant, Héros du mal</p>
            <Images src={bane}>
            </Images>
            <br/>
            <button onClick={() => window.open('https://www.otk-expert.fr/yugioh/cartes/fleau-malveillant-heros-du-mal//')}>Carte</button>
            <br/>
            </Ecriture>

        </div>
    );
};

Hero.propTypes = {
    
};

const Images = styled.img`
height: 200px;
float: center;
`

const Ecriture = styled.div`
text-align: center;
color: white;
`

export default Hero;

