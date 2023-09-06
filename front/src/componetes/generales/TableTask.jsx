import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import axios from 'axios';
import UseTasks from '../../hooks/useTask';
import EditTaskForm from './FormTaksedit';

function TableList() {
  const { handleDeleteTask, tasks } = UseTasks();
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = (taskId) => {
    setEditingTaskId(taskId);
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
    setIsEditing(false);
  };

  return (
    <>
      <CardGroup className="justify-content-center">
        {tasks.map((task) => (
          <div className="col-12 col-md-8" key={task._id}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title className="text-center">{task.titulo}</Card.Title>
                <Card.Text>Descripción: {task.descripcion}</Card.Text>
                <Card.Text>Fecha de Creación: {task.fecha}</Card.Text>
                <Card.Text>Estado: {task.complete}</Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center">
                <button
                  className="btn btn-primary mx-2"
                  onClick={() => handleEditClick(task._id)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => handleDeleteTask(task._id)}
                >
                  Eliminar
                </button>
                <button className="btn btn-success" onc>Completar</button>
              </Card.Footer>
            </Card>
            {isEditing && editingTaskId === task._id && (
              <EditTaskForm
                taskId={editingTaskId}
                onCancelEdit={handleCancelEdit}
              />
            )}
          </div>
        ))}
      </CardGroup>
    </>
  );
}

export default TableList;