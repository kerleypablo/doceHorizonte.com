import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [Menuprodutos, setMenuProdutos] = useState({ ativado: false });
  const state = useMemo(() => ({
    Menuprodutos,
    setMenuProdutos,
  }), []);

  return (
    <div>
      <Context.Provider value={state}>
        { children }
      </Context.Provider>
    </div>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
