import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import Header from '../Components/Header';
import Menu from '../Components/MenuLateral';
import ProdutoCard from '../Components/ProdutoCard';
import './styles/produtos.css';
import img from '../images/bento1.jpeg';

const itemsPerPage = 8;

function Produto() {
  const [currentPage, setCurrentPage] = useState(1);

  const products = [
    {
      id: 1, nome: 'teste', preco: 'R$2,50', imagem: img,
    },
    {
      id: 2, nome: 'teste', preco: 'R$2,50', imagem: img,
    },
    {
      id: 3, nome: 'teste', preco: 'R$2,50', imagem: img,
    },
    {
      id: 4, nome: 'teste', preco: 'R$2,50', imagem: img,
    },
    {
      id: 5, nome: 'teste', preco: 'R$2,50', imagem: img,
    },
    {
      id: 14, nome: 'teste', preco: 'R$2,50', imagem: img,
    },
    {
      id: 6, nome: 'teste', preco: 'R$2,50', imagem: img,
    },
    {
      id: 7, nome: 'teste', preco: 'R$2,50', imagem: img,
    },
    {
      id: 8, nome: 'teste', preco: 'R$2,50', imagem: img,
    },
    {
      id: 52, nome: 'teste', preco: 'R$2,50', imagem: img,
    },
    {
      id: 10, nome: 'teste', preco: 'R$2,50', imagem: img,
    },
    {
      id: 12, nome: 'teste', preco: 'R$2,50', imagem: img,
    },
    {
      id: 82, nome: 'teste', preco: 'R$2,50', imagem: img,
    },
    {
      id: 13, nome: 'teste', preco: 'R$2,50', imagem: img,
    },
  ];
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const pageCount = Math.ceil(products.length / itemsPerPage);
  const handleClick = (pageNumber) => {
    setCurrentPage(Number(pageNumber.target.innerText));
  };

  return (
    <div>
      <Header />
      <section className="sectionproduto">
        <Menu />
        <div className="bodyproducts">
          <div className="pagination">
            <Pagination
              count={pageCount}
              onChange={handleClick}
              page={currentPage}
            />
          </div>
          <div className="listProduct">

            <Stack spacing={2}>
              <div className="produtosList">
                {currentProducts.map((product) => (
                  <ProdutoCard
                    key={product.id}
                    id={product.id}
                    nome={product.nome}
                    preco={product.preco}
                    imagem={product.imagem}
                  />
                ))}
              </div>
            </Stack>
          </div>
          <div className="pagination">
            <Pagination
              count={pageCount}
              onChange={handleClick}
              page={currentPage}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Produto;
