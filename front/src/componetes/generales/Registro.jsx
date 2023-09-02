import useRegistrarUser from "../../hooks/UseRegistro";
import Alerta from "./Alertas";

function RegistroUser() {
  const {
    
    handleChange,
    handleRegistro ,
    formData,
  
    alerta,
  }=  useRegistrarUser();
    return ( <>
    <div className="container my-5">
  <h1 className="text-center fw-bold text-primary">Registrarse Datos</h1>
  <form onSubmit={handleRegistro}>
    <div className="row justify-content-center">
      <div className="col-12 col-md-6">
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombres
          </label>
          <input
            type="text"
            className="form-control"
            name="nombre" 
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo
          </label>
          <input
            type="email"
            className="form-control"
            name="email" 
            value={formData.email}
            onChange={handleChange}

          />
        </div>
        <div className="mb-3">
          <label htmlFor="
password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
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
  {alerta.msg && <Alerta alerta={alerta} />}{" "}
</div>
    </>
  );
}

export default RegistroUser;