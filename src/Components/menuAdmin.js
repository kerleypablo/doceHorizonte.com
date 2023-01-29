import React from 'react';
import SidebarAdmin from './sidebarAdmin1';
import './Styles/menuAdimin.css';

function MenuAdmin() {
  return (
    <div className="menuLateralADM">
      <SidebarAdmin numLinks={5} titulo="Cadastro" link1="Cliente" link2="Insumo" link3="Receita" link4="Produto" link5="Pedido" />
      <SidebarAdmin numLinks={2} titulo="Agenda" link1="Pedidos" link2="Calendario" />
    </div>
  );
}

export default MenuAdmin;
