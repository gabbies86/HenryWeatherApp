import React from 'react';
import './about.css';
import Logo from '../img/logoHenry.png'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className='about'>
      <div className='aboutText'>
      <p>"Weather App" forma de un ejercicio de la carrera de Full Stack Developer brindada por Henry.</p>
      <p className="sign">
      Gabriela Marciano</p>
      </div>
      <div>
        <a href={'https://www.soyhenry.com/'}>
          <div className="icon">
            <img className="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            <p>www.soyhenry.com</p>
          </div>
        </a>
      </div>
    </div>
  );
}
