import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import UseTasks from '../../hooks/useTask';
import EditTaskForm from './FormTaksedit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

function TableList() {
  const { handleDeleteTask, tasks, handleChangeState } = UseTasks();
  const [editingTaskId, setEditingTaskId] = useState(null);

  const formatearFecha = (fecha) => {
    //  funcion para formatear la fecha
    const nuevaFecha = new Date(fecha); // crea un objeto de tipo fecha
    nuevaFecha.setMinutes(nuevaFecha.getMinutes() + nuevaFecha.getTimezoneOffset()); //ajusta la hora a la zona horaria
    return new Intl.DateTimeFormat("es-MX", { dateStyle: "long" }).format( nuevaFecha); // retorna la fecha formateada
  };

  const handleEditClick = (taskId) => {
    setEditingTaskId(taskId);
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4">
          {editingTaskId && (
            <EditTaskForm
              taskId={editingTaskId}
              onCancelEdit={handleCancelEdit}
            />
          )}
        </div>
        <div className=" col-12 col-md-8">
          <CardGroup className="justify-content-center">
            {tasks.map((task) => (
              <div className="col-12 col-md-8" key={task._id}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title className="text-center">{task.titulo}</Card.Title>
                    <Card.Text>Descripción: {task.descripcion}</Card.Text>
                    <Card.Text>Fecha de Creación: {formatearFecha(task.fecha)}</Card.Text>
                    <Card.Text>Estado: {task.complete}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-center">
                    <button
                      className="btn btn-primary mx-2"
                      onClick={() => handleEditClick(task._id)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => handleDeleteTask(task._id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => handleChangeState(task._id)}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </CardGroup>
        </div>
      </div>
    </div>
  );
}

export default TableList;