function FormTask() {
    return (<>
            <div className="container my-5">
        <h1 className="text-center fw-bold text-center text-primary">Crear Tareas</h1>
        <form>
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
                 
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="observaciones" className="form-label">
                  Descripción de la tarea
                </label>
                <textarea
                  className="form-control"
                  name="observaciones"
                  rows="3"
                  
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