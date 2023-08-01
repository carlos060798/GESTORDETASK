import express from "express";
import {
  agregarTarea,
  eliminarTarea,
  actualizarTarea,
  obtenerTareas,
  obtenerTareaid,
  cambiarEstadoTarea
  
} from "../controller/TareasController.js";
const router = express.Router();


router
  .route("/")
  .post(agregarTarea).get(obtenerTareas); 

  // operaciones del crud 
  router
    .route("/:id")
    .get(obtenerTareaid)
    .put(actualizarTarea)
    .delete(eliminarTarea)
    .patch(cambiarEstadoTarea);
  

export default router;