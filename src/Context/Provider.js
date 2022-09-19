import React, { useState, useEffect } from "react";
import Context from "./Context";

function Provider({ children }) {
  const [ Menuprodutos, setMenuProdutos ] = useState({ ativado: false });
  const INITIAL_STATE= {
    Menuprodutos, 
    setMenuProdutos
  }
  return(
    <div>
     <Context.Provider value={ { ...INITIAL_STATE}}>
      { children }
     </Context.Provider>
    </div>
  );
}

export default Provider;
