import React from 'react';
import Header from '../Components/Header';
import Menu from '../Components/MenuLateral';
import ProdutoCard from '../Components/ProdutoCard';
import './styles/produtos.css';
import img from '../images/bento1.jpeg';

function Produto() {
  return (
    <div>
      <Header />
      <section className="sectionproduto">
        <Menu />
        <div className="produtosList">
          <ProdutoCard id={1} nome="teste" preco="R$2,50" imagem={img} />
        </div>
      </section>
    </div>
  );
}

export default Produto;
