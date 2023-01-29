import React, { useState } from 'react';
import './styles/cadastro-insumo.css';

function Cadastroinsumo() {
  const [insumo, setInsumo] = useState({
    nome: '',
    marca: '',
    fornecedor: '',
    valor: '',
    quantidade: '',
    unidade: 'G',
  });

  const handleChange = (event) => {
    setInsumo({
      ...insumo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
  };

  return (
    <form onSubmit={handleSubmit} className="formInsumo">
      <h3>Cadastro de Insumos</h3>
      <div>
        <label htmlFor="nome" className="labelInsumo">
          Nome:
          <input
            className="inputselectInsumo"
            type="text"
            id="nome"
            name="nome"
            value={insumo.nome}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="marca" className="labelInsumo">
          Marca:
          <input
            className="inputselectInsumo"
            type="text"
            id="marca"
            name="marca"
            value={insumo.marca}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="fornecedor" className="labelInsumo">
          Fornecedor:
          <input
            className="inputselectInsumo"
            type="text"
            id="fornecedor"
            name="fornecedor"
            value={insumo.fornecedor}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="valor" className="labelInsumo">
          Valor:
          <input
            className="inputselectInsumo"
            type="text"
            id="valor"
            name="valor"
            value={insumo.valor}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="quantidade" className="labelInsumo">
          Quantidade:
          <input
            className="inputselectInsumo"
            type="text"
            id="quantidade"
            name="quantidade"
            value={insumo.quantidade}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="unidade" className="labelInsumo">
          Unidade:
          <select
            className="inputselectInsumo"
            id="unidade"
            name="unidade"
            value={insumo.unidade}
            onChange={handleChange}
          >
            <option value="G">Gramas (G)</option>
            <option value="Ml">Milímetros (Ml)</option>
            <option value="cm">Centímetros (cm)</option>
            <option value="Un">Unidade (Un)</option>
          </select>
        </label>
      </div>
      <button type="submit" className="buttonInsmo">Cadastrar</button>
    </form>
  );
}

export default Cadastroinsumo;
