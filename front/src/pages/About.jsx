import React from 'react';
import { Link } from 'react-router-dom';

function Nosotros() {
  return (
    <>
        <>
      <div className="mt-5 container">
      <div className="bg-primary text-white text-center py-5">
        <h1 className="text-4xl font-bold">Gestor de Tareas</h1>
        <p className="text-xl mt-4">Mantente organizado y productivo</p>
        <Link to="/" className="mt-4">
          <button className="btn btn-dark mt-4">Volver a Inicio</button>
        </Link>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <h2 className="text-2xl font-bold">Acerca del Gestor de Tareas</h2>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ligula ut turpis auctor scelerisque. Nulla
              facilisi. In eget arcu id ligula posuere bibendum. Aliquam ut vulputate lacus.
            </p>
            <p className="mt-4">
              Phasellus quis lectus in massa fermentum pharetra. In nec arcu eu felis consectetur fringilla. Duis eu
              massa consectetur, viverra ipsum vitae, dapibus lorem. Donec pharetra rhoncus metus non vestibulum.
            </p>
          </div>

          <div className="col-md-4">
            <h2 className="text-2xl font-bold">Características Clave</h2>
            <hr className="mt-4" />
            <ul className="mt-4 list-unstyled">
              <li>Creación y gestión de tareas</li>
              <li>Configuración de prioridad y fecha de vencimiento</li>
              <li>Asignación de tareas a miembros del equipo</li>
              <li>Actualizaciones y notificaciones en tiempo real</li>
              <li>Seguimiento de progreso e informes</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-primary text-white text-center py-3">
        <p className="font-semibold text-2xl">Gestor de Tareas © 2023</p>
      </div>
    </div>
    </>
  
 </>
  );
}

export default Nosotros;