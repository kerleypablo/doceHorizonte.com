import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Produto from './Pages/Produto';
import AdminHome from './Pages/adminHome';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="home">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/logar" element={<Login />} />
          <Route exact path="/produto" element={<Produto />} />
          <Route exact path="/admin" element={<AdminHome />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
