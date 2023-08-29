function Perfils() {
    return ( 
    
    
    <>
     <div className="container my-5">
        <h1 className="text-center fw-bold text-center text-primary">Actualizar Datos</h1>
        <form>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6">
              <div className="mb-3">
            
              <div className="mb-3">
                <label htmlFor="nombres" className="form-label">
                  Nombres
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="titulo"
                 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="nombres" className="form-label">
                  Correo
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="titulo"
                 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="nombres" className="form-label">
                  Nueva contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="titulo"
                 
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
               Actualizar 
            </button>
          </div>
          </div>
        </form>
      </div>
    
    </> );
}

export default Perfils;