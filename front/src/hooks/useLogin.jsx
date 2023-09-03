import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function useLogin() {
  const [DataUser, setDataUser] = useState({
    email: "",
    password: "",
  });

  const redireccion = useNavigate();
  const [alerta, setAlerta] = useState({});

  const handleChangeUser = (e) => {
    const { name, value } = e.target;
    setDataUser((prevDataUser) => ({
      ...prevDataUser,
      [name]: value,
    }));
  };

  const handleSeccion = async (e) => {
    e.preventDefault();
    if ([DataUser.email, DataUser.password].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    try {
      const usuarioResponse = await axios.post(
        "http://localhost:4000/api/Usuario/login",
        DataUser
      );
      console.log("RESPUESTA DE LA API:", usuarioResponse);
      const { data } = usuarioResponse;
      console.log(data);  
      // Autenticación exitosa
      console.log("AUTENTICACION CORRECTA");
      setAlerta({
        msg: data.msg,
        error: false,
      });

      // Guardar la información de inicio de sesión en el almacenamiento local del navegador
      localStorage.setItem("usuarioLogeado", "true");

      // Redirigir después de 5 segundos
      setTimeout(() => {
        redireccion("/user");
      }, 5000);
      
    } catch (error) {
      console.error("ERROR DE AUTENTICACION:", error);

        // Mostrar alerta de error
        setTimeout(() => {
          setAlerta({
            msg: error.response.data.msg,
            error: true,
          });
        }, 3000);
    }
  };

  return {
    alerta,
    DataUser,
    handleChangeUser,
    handleSeccion,
  };
}

export default useLogin;