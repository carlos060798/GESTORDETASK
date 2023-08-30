import express from "express";

import {
  Registrar,
  ModificarUsuario,
} from "../controller/UsuarioController.js"
import autencicar from "../controller/LoginController.js";

const router = express.Router();

// rutas de veterinario publicas

router.post("/", Registrar);
router.put("/:id", ModificarUsuario);

// rutas de  iniciar seccion
router.post("/login", autencicar);

export default router;
