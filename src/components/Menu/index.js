import React from 'react';
import Button from '../Button'
//import ButtonLink from './components/ButtonLink'
import logo from './../../assets/img/logo.png';
import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logo} alt='TertuFlix logo' ></img>
      </a>
      <Button as="a" className="ButtonLink" href="/" >
        Video novo
      </Button>
    </nav>
  );
}

export default Menu;