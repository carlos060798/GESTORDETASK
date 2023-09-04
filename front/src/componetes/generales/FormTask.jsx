import UseTasks from "../../hooks/useTask";

function FormTask() {
  const { Formtask,handleChange,handleCreateTask}=UseTasks();
    return (<>
            <div className="container my-5">
        <h1 className="text-center fw-bold text-center text-primary">Crear Tareas</h1>
        <form onSubmit={handleCreateTask}>
          <div className="row">
            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="nombres" className="form-label">
                  Titulo
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="titulo" 
                  value={Formtask.titulo}
                  onChange={handleChange}           
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">
                  Descripción de la tarea
                </label>
                <textarea
                  className="form-control"
                  name="descripcion"
                  rows="3"
                  value={Formtask.descripcion}
                  onChange={handleChange}
                  
                ></textarea>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
               Crear Tarea
            </button>
          </div>
        </form>
      </div>
    
    </>  );
}

export default FormTask;