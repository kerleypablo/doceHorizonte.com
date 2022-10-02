import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles/Header.css';
import { IoMdLogIn } from 'react-icons/io';
import logo from '../images/logo.png';

function Header() {
  const [menuprodutos, setMenuProdutos] = useState({ ativado: true });

  const handleInput = () => {

  };

  useEffect(() => {
    const menuAtivo = document.querySelector('.dropdown');
    menuAtivo.addEventListener('click', () => (
      menuprodutos.ativado
        ? setMenuProdutos({ ativado: false })
        : setMenuProdutos({ ativado: true })
    ));
  }, [menuprodutos]);

  return (
    <div className="subMenu">
      <header>
        <div className="logo_header">
          <img src={logo} alt="logo" />
        </div>
        <div className="menu_Header">
          <a href=" ">
            <Link to="/profile">sobre</Link>
          </a>
          <a href=" " onClick={handleInput} className="dropdown"><Link to="/">Produtos</Link></a>
          <a href=" "><Link to="/contato">Contato</Link></a>
        </div>
        <div>
          <Link to="/logar">
            <IoMdLogIn />
            login
          </Link>
        </div>
      </header>
      { menuprodutos.ativado
        ? (
          <div className="link_subMenu">
            <a href=" "><Link to="/contato">bolos</Link></a>
            <a href=" "><Link to="/contato">doces</Link></a>
            <a href=" "><Link to="/contato">kit</Link></a>
          </div>
        )
        : (<div />)}
    </div>
  );
}

export default Header;
