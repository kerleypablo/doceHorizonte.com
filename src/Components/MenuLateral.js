import React from 'react';
import MenuSideBar from './MenuSideBar';
import './Styles/MenuLateral.css';

function MenuLateral() {
  return (
    <div className="menuLateral">
      <MenuSideBar titulo="Bolos" link1="Naked" link2="Buttercrema / confeitado" link3="Bnto Cake" />
      <MenuSideBar titulo="Doces" link1="Brigadeiros" link2="especiais" link3="Diversos" />
      <MenuSideBar titulo="Kits" link1="Festa" link2="especiais" link3="Empresa" />
    </div>
  );
}

export default MenuLateral;
