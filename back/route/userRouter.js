import express from "express";
import {
  Registrar,
  Autenticar,
  
} from "../controller/UsuarioController.js";

const router = express.Router();

// rutas de veterinario publicas

router.post("/", Registrar); 
router.post("/login", Autenticar); 

export default router;