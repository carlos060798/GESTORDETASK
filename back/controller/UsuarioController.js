import express from "express";
import Usuario from "../model/UserModel.js";


const Registrar = async (req, res) => {
    const { email, nombre, password } = req.body;
    console.log(req.body);
    
    const existeUsuario = await Usuario.findOne({ email }); 
  
    if (existeUsuario) {
    
      const error = new Error("El usuario ya está registrado"); 
      return res.status(400).json({ msg: error.message }); 
    }
  
    try {
      const NuevoUser = new Usuario(req.body); 
      const Userguardado = await NuevoUser.save();
     
      console.log(Userguardado, "user guardado")
      res.json({ Userguardado }); 
    } catch (error) {
      console.log(error, "error en el catch");
    }
  };

//función para autenticar  user

const Autenticar = async (req, res) => {
    const { email, password } = req.body;
  
    const user = await Usuario.findOne({ email }); //busca un usuario con el mismo email
    if (!user) {
      const error = new Error("El usuario no existe"); //crea un nuevo error
      return res.status(404).json({ msg: error.message }); //envia un mensaje de usuario no encontrado
    }
  
    // revisar si el password es correcto
  
    if (user.password === password) {
     
      res.json({
      
  
        _id: user.id,
        nombre: user.nombre,
        email: user.email,
        
      }); 
    } else {
      const error = new Error("password incorrecto"); //crea un nuevo error
      return res.status(403).json({ msg: error.message }); //envia un mensaje de usuario no encontrado
    }
  };

  export { Registrar, Autenticar };