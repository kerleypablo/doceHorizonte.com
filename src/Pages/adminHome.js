import React from 'react';
import Header from '../Components/Header';
import MenuAdmin from '../Components/menuAdmin';
import Cadastroinsumo from './Cadastro-Insumo';
import './styles/produtosADM.css';

function AdminHome() {
  return (
    <div>
      <Header />
      <section className="sectionprodutoADM">
        <MenuAdmin />
        <Cadastroinsumo />
      </section>
    </div>
  );
}

export default AdminHome;
