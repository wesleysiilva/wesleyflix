import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button/Index';
//import ButtonLink from './components/ButtonLink/Index';

function Menu () {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Wesleyflix logo"/>
      </a>

      <Button as="a" href="/" className="ButtonLink">
        Novo vídeo
      </Button>

    </nav>
  );
}

export default Menu;