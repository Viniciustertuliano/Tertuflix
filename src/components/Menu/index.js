import React from 'react';
import { Link } from 'react-router-dom';
//  import Button from '../Button'
import logo from './../../assets/img/logo.png';
import './Menu.css';
//  import ButtonLink from './components/ButtonLink'
//  <Button as={Link} className="ButtonLink" to="/cadastro/video" >
//  Video novo
//  </Button>

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={logo} alt='TertuFlix logo' ></img>
      </Link>
    
    </nav>
  );
}

export default Menu;