import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { LogoImage, MenuWrapper, ButtonLink } from './style.js';

function Menu () {
  return (
    <MenuWrapper className="Menu">
      <a href="/">
        <LogoImage src={Logo} alt="Wesleyflix logo"/>
      </a>

      <ButtonLink as="a" href="/" className="ButtonLink">
        Novo vídeo
      </ButtonLink>

    </MenuWrapper>
  );
}

export default Menu;