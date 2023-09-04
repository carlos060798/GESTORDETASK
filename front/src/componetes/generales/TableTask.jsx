/*import { Card, CardGroup } from 'react-bootstrap';

function TableList() {
  
    return (<>
  
  <CardGroup className="justify-content-center">
  <div className="col-12 col-md-8 ">
    <Card className="mb-3">
      <Card.Body>
        <Card.Title className='text-center'>Card 1</Card.Title>
        <Card.Text>
         Descripcion: prueba 1
        </Card.Text>
        <Card.Text>
          Fecha de Creacion: 12/12/2021
        </Card.Text>
        <Card.Text>
          Estado: pendiente
        </Card.Text>


      </Card.Body>
      <Card.Footer className="d-flex justify-content-center">
  <button className="btn btn-primary mx-2">Editar</button>
  <button className="btn btn-danger mx-2">Eliminar</button>
  <button className="btn btn-success">Completar</button>
</Card.Footer>
    </Card>
  </div>
</CardGroup>
      
    </> );
}

export default TableList;*/
import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import axios from 'axios';

function TableList() {
  const [userTasks, setUserTasks] = useState([]);

  useEffect(() => {
    // Realiza una solicitud a la API para obtener las tareas del usuario actual
    const userId = localStorage.getItem('userId');
    
    axios.get(`http://localhost:4000/api/Tarea`)
      .then((response) => {
        // Almacena las tareas del usuario en el estado
        setUserTasks(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener las tareas:', error);
      });
  }, []);

  return (
    <>
      <CardGroup className="justify-content-center">
        {userTasks.map((task) => (
          <div className="col-12 col-md-8" key={task._id}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title className="text-center">{task.titulo}</Card.Title>
                <Card.Text>Descripción: {task.descripcion}</Card.Text>
                <Card.Text>Fecha de Creación: {task.fecha	}</Card.Text>
                <Card.Text>Estado: {task.complete}</Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center">
                <button className="btn btn-primary mx-2">Editar</button>
                <button className="btn btn-danger mx-2">Eliminar</button>
                <button className="btn btn-success">Completar</button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </CardGroup>
    </>
  );
}

export default TableList;