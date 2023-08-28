import { Link } from "react-router-dom";

function  Section() {
    return ( 
    <>
           <div className="container my-5">
        <h1 className="text-center fw-bold  text-primary">lNICIO DE SECCION</h1>
        <div className="row justify-content-center">
          <div className="col-md-10 mx-auto col-lg-5">
            <form
              className="p-4 p-md-5 border rounded-3 bg-body-tertiary"
         
            >
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  name="email"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                 
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
             <Link to="/user"> <button className="w-100 btn btn-lg btn-primary" >
            
                Login
              </button>
              </Link>
              <hr className="my-4" />

              <small className="text-body-secondary"></small>
            </form>
          </div>
        </div>
      </div>
     
    
    </> );
}

export default  Section;