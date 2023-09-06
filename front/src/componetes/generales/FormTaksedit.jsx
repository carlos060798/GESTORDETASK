import React, { useEffect, useState } from "react";
import axios from "axios";

function EditTaskForm({ taskId, onCancelEdit }) {
  const [taskData, setTaskData] = useState({
    titulo: "",
    descripcion: "",
  });

  useEffect(() => {
    // Realiza una solicitud para obtener los datos de la tarea por ID
    axios
      .get(`http://localhost:4000/api/Tarea/${taskId}`)
      .then((response) => {
        // Almacena los datos de la tarea en el estado
        setTaskData(response.data.task);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de la tarea:", error);
      });
  }, [taskId]);

  const handleUpdateTask = async () => {
    try {
      // Realiza una solicitud para actualizar la tarea con los nuevos datos
      await axios.put(`http://localhost:4000/api/Tarea/${taskId}`, taskData);
      console.log("Tarea actualizada correctamente");
      // Cierra el formulario de edición
      onCancelEdit();
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevTaskData) => ({
      ...prevTaskData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2 className="text-center fw-bold text-primary">Editar Tarea</h2>

      <form onSubmit={handleUpdateTask}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">
            Título
          </label>
          <input
            type="text"
            className="form-control"
            name="titulo"
            value={taskData.titulo}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">
            Descripción de la tarea
          </label>
          <textarea
            className="form-control"
            name="descripcion"
            rows="3"
            value={taskData.descripcion}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="d-flex justify-content-center gap-3">
          <button type="submit" className="btn btn-primary">
            Guardar Cambios
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onCancelEdit}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditTaskForm;
