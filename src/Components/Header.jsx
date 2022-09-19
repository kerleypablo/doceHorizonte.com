import React, { useContext, useRef, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Styles/Header.css';
import { IoMdLogIn } from 'react-icons/io';
import logo from '../images/logo.png'
import Context from '../Context/Context';

function Header() {
  const { Menuprodutos, setMenuProdutos } = useContext(Context)
  useEffect(() => {
    const menuAtivo = document.querySelector(".dropdown");
    menuAtivo.addEventListener('click', () => (
    Menuprodutos.ativado 
      ? setMenuProdutos({ ativado: false })
      : setMenuProdutos({ ativado: true })
    )) 
  }, [Menuprodutos])

  
  return (
    <div className='subMenu'>
    <header>
      <div className="logo_header">
          <img src={ logo } alt='logo'/>
      </div>
      <div className="menu_Header">
          <a> <Link to="/profile">sobre</Link></a>
          <a className='dropdown'><Link to="/"  >Produtos</Link></a>
          <a><Link to="/contato">Contato</Link></a>
      </div>
      <div>
          <Link to="/logar"><IoMdLogIn />login</Link>
      </div>
    </header>
          { Menuprodutos.ativado 
            ? (
            <div className='link_subMenu'>
            <a><Link to="/contato">bolos</Link></a>
            <a><Link to="/contato">doces</Link></a>
            <a><Link to="/contato">kit</Link></a>
            </div>
            ) 
            : ( <div></div>)
          }
          </div>
  );
}

export default Header;
