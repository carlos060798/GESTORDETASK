import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="mt-5">
      <div className="bg-primary text-white text-center py-5 mt-3rem">
        <h1 className="text-xl font-bold">TaskManager</h1>
        <p className="text-xl mt-4">Mantente organizada y productiva</p>
        <Link to="/Registro" className="mt-4">
          <button className="btn btn-dark mt-4">Empezar</button>
        </Link>
        <div className="text-blue-500 text-center py-3 mt-8">
          <p className="font-semibold text-xl mb-0">Task Manager &copy; 2023</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
