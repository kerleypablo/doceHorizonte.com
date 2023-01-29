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
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="menu_Header">
          <a href=" ">
            <Link to="/profile">Sobre</Link>
          </a>
          <button type="button" onClick={handleInput} className="dropdown">Produtos</button>
          <a href=" "><Link to="/contato">Contato</Link></a>
        </div>
        <div>
          <Link to="/logar">
            <IoMdLogIn />
            Login
          </Link>
        </div>
      </header>
      { menuprodutos.ativado
        ? (
          <div className="link_subMenu">
            <a href=" "><Link to="/produto">Bolos</Link></a>
            <a href=" "><Link to="/contato">Doces</Link></a>
            <a href=" "><Link to="/contato">Kit</Link></a>
          </div>
        )
        : (<div />)}
    </div>
  );
}

export default Header;
