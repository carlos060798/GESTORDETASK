import { Card, CardGroup } from 'react-bootstrap';
import UseTasks from '../../hooks/useTask';

function TableLists() {
  const { tasks } = UseTasks();

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
             
            </Card>
          </div>
        ))}
      </CardGroup>
      
    </>
  );
}

export default TableLists;