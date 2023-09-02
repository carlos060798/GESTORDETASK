import { useState } from "react";
import axios from "axios";
function useRegistrarUser() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
  });



  const [alerta, setAlerta] = useState({}); // Estado para mostrar la alerta

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const handleRegistro = async (e) => {
    e.preventDefault();

    // Validar que no falten campos
    if (
      [
        formData.nombre,
        formData.email,
        formData.password,
       

      ].includes("")
    ) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
    console.log(formData);


    try {
      // 1. Llamar a la API para crear el usuario
      const usuarioResponse = await axios.post(
        "http://localhost:4000/api/Usuario",
        formData
      );
        console.log("Usuario creado exitosamente");
      // Mostrar alerta de éxito
      setAlerta({
        msg: "Usuario creado exitosamente",
        error: false,
      });
      // Limpiar formulario
      setFormData({
        nombre: "",
        email: "",
        password: "",
      });
    
    } catch (error) {
      console.error("Error al Registrarse:", error);
      // Mostrar alerta de error
      setAlerta({
        msg: "Error al registrarse",
        error: true,
      });
    }
  };

  return {
    
    handleChange,
    handleRegistro ,
    formData,   
    alerta,
  };
}

export default useRegistrarUser;