import { Card, CardGroup } from 'react-bootstrap';

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

export default TableList;