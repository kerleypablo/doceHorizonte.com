import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Styles/produtoCard.css';

function ProdutoCard({
  preco, nome, id, imagem = '',
}) {
  return (
    <div className="ProdutoCar">
      <h3>{nome}</h3>
      <img src={imagem} className="ProdutoCarimagem" alt={nome} />
      <p className="ProdutoCar-preco">
        Preço:
        {preco}
      </p>
      <Link className="ProdutoCar-botao" to={id}>Saiba mais</Link>
    </div>
  );
}

export default ProdutoCard;

ProdutoCard.propTypes = {
  imagem: PropTypes.string.isRequired,
  preco: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  nome: PropTypes.string.isRequired,
};
