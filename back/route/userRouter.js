import express from "express";
import {
  Registrar,
  Autenticar,
  ModificarUsuario,
  
} from "../controller/UsuarioController.js";

const router = express.Router();

// rutas de veterinario publicas

router.post("/", Registrar); 
router.put("/:id", ModificarUsuario);
router.post("/login", Autenticar); 


export default router;