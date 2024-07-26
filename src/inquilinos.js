import React from 'react';
import './inquilinos.css';  // Asegúrate de tener este archivo CSS en tu proyecto

const inquilinos = () => {
  const data = [
    { nombre: 'Romina Coronado', correo: '20979@virtual.utsc.edu.mx', cargoMensual: '2,500', activo: 'Activo' },
    { nombre: 'Dato 5', correo: 'Dato 6', cargoMensual: 'Dato 7', activo: 'Dato 8' },
    { nombre: 'Dato 9', correo: 'Dato 10', cargoMensual: 'Dato 11', activo: 'Dato 12' },
    { nombre: 'Dato 13', correo: 'Dato 14', cargoMensual: 'Dato 15', activo: 'Dato 16' }
  ];


  return (
    <section>
      <header>
        <a href="/cuentas.html">
          <img src="./logodli-Photoroom.png" className="logo" alt="Logo DLI" />
        </a>
        <ul>
          <li><a href="/cuentas.html">Crear Cuentas</a></li>
          <li><a href="#">Control Inquilinos</a></li>
          <li><a href="#" className="btn-admin">Admin. Cajones</a></li>
        </ul>
      </header>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Nombre:</th>
              <th>Correo:</th>
              <th>Cargo Mensual:</th>
              <th>Activo</th>
            </tr>
          </thead>
          <tbody>
            {data.map((inquilino, index) => (
              <tr key={index}>
                <td>{inquilino.nombre}</td>
                <td>{inquilino.correo}</td>
                <td>{inquilino.cargoMensual}</td>
                <td>{inquilino.activo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default inquilinos;
