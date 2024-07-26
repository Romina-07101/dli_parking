import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Asegúrate de tener el archivo CSS correspondiente

import Header from './Header';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import Inquilinos from './inquilinos'; // Importa el componente Inquilinos
import AdminCajones from './cajones'; // Importa el componente AdminCajones

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <LeftColumn />
          <RightColumn />
        </div>
        <Routes>
          <Route path="/" element={<div>Inicio</div>} />
          <Route path="/inquilinos" element={<Inquilinos />} />
          <Route path="/admin" element={<AdminCajones />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
