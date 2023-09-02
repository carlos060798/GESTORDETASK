function RegistroUser() {
    return ( <>
    <div className="container my-5">
  <h1 className="text-center fw-bold text-primary">Registrarse Datos</h1>
  <form>
    <div className="row justify-content-center">
      <div className="col-12 col-md-6">
        <div className="mb-3">
          <label htmlFor="nombres" className="form-label">
            Nombres
          </label>
          <input
            type="text"
            className="form-control"
            name="nombres" // Cambiado de "titulo" a "nombres"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">
            Correo
          </label>
          <input
            type="email"
            className="form-control"
            name="correo" // Cambiado de "titulo" a "correo"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contrasena" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            name="contrasena" // Cambiado de "titulo" a "contrasena"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="repetir-contrasena" className="form-label">
            Repetir contraseña
          </label>
          <input
            type="password"
            className="form-control"
            name="repetir-contrasena" // Cambiado de "titulo" a "repetir-contrasena"
          />
        </div>
      </div>
    </div>
    <div className="text-center">
      <button type="submit" className="btn btn-primary">
        Registrarse
      </button>
    </div>
  </form>
</div>
    </>
  );
}

export default RegistroUser;