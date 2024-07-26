import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/"><img src="./logodli-Photoroom.png" alt="Logo DLI Parking" className="logo" /></Link>
      <ul>
        <li><Link to="/inquilinos">Control Inquilinos</Link></li>
        <li><Link to="/cajones" className="btn-admin">Admin Cajones</Link></li>
      </ul>
    </header>
  );
}

export default Header;
