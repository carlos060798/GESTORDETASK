import { useState, useEffect } from "react";
import axios from "axios";

function UseTasks() {
  const [tasks, setTasks] = useState([]);
  const [Formtask, setFormTask] = useState({
    titulo: "",
    descripcion: "",
    usuario: "", // Asigna el ID del usuario aquí
  });
  const [alerta, setAlerta] = useState({});

  useEffect(() => {
    // Obtener el valor del "userId" del localStorage
    const usuarioid = localStorage.getItem("userId");

    // Actualizar el estado de Formtask con el valor de usuario del localStorage
    if (usuarioid) {
      setFormTask((prevFormTask) => ({
        ...prevFormTask,
        usuario: usuarioid,
      }));
    }
  }, []); // Este useEffect se ejecutará una vez después del montaje del componente

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormTask((prevFormTask) => ({
      ...prevFormTask,
      [name]: value,
    }));
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();

    // Validar que no falten campos
    if ([Formtask.titulo, Formtask.descripcion].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    try {
      // Llamar a la API para crear la tarea
      const TareaResponse = await axios.post(
        "http://localhost:4000/api/Tarea",
        Formtask
      );
      const { data } = TareaResponse;

      // Mostrar alerta de éxito
      setAlerta({
        msg: data.msg,
        error: false,
      });

      // Limpiar formulario y ocultar la alerta después de 3 segundos
      setTimeout(() => {
        setFormTask({
          titulo: "",
          descripcion: "",
          usuario: Formtask.usuario, // Mantén el ID del usuario
        });
        setAlerta({});
      }, 3000);
    } catch (error) {
      console.error("Error al Crear Tarea:", error);
      // Mostrar alerta de error
      setTimeout(() => {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
      }, 3000);
    }
  };

  const handleUpdateTask = (e) => {
    // Implementa la lógica para actualizar una tarea
  };

  const handleDeleteTask = (e) => {
    // Implementa la lógica para eliminar una tarea
  };

  const handleGetTasks = (e) => {
    // Implementa la lógica para obtener las tareas
  };

  const handleChangeState = (e) => {
    // Implementa la lógica para cambiar el estado de una tarea
  };

  return {
    tasks,
    Formtask,
    handleChange,
    handleCreateTask,
    handleUpdateTask,
    handleDeleteTask,
    handleGetTasks,
    handleChangeState,
    alerta,
  };
}

export default UseTasks;














/*import { useState, useEffect } from "react";
import axios from "axios";

function UseTasks() {
  const [tasks, setTasks] = useState([]);
  const [Formtask, setFormTask] = useState({
    titulo: "",
    descripcion: "",
    usuario: "", // Asigna el ID del usuario aquí
  });
  const [alerta, setAlerta] = useState({});

  useEffect(() => {
    // Obtener el valor del "userId" del localStorage
    const usuarioid = localStorage.getItem("userId");

    // Actualizar el estado de Formtask con el valor de usuario del localStorage
    if (usuarioid) {
      setFormTask((prevFormTask) => ({
        ...prevFormTask,
        usuario: usuarioid,
      }));
    }
  }, []); // Este useEffect se ejecutará una vez después del montaje del componente

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormTask((prevFormTask) => ({
      ...prevFormTask,
      [name]: value,
    }));
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();

    // Validar que no falten campos
    if ([Formtask.titulo, Formtask.descripcion].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    try {
      // Llamar a la API para crear la tarea
      const TareaResponse = await axios.post(
        "http://localhost:4000/api/Tarea",
        Formtask
      );
      const { data } = TareaResponse;
      setAlerta({
        msg: data.msg,
        error: false,
      });
      // Limpiar formulario
      setTimeout(() => {
        setFormTask({
          titulo: "",
          descripcion: "",
          usuario: Formtask.usuario, // Mantén el ID del usuario
        });
        setAlerta({}); // Oculta la alerta
      }, 3000);
    } catch (error) {
      console.error("Error al Crear Tarea:", error);
      // Mostrar alerta de error
      setTimeout(() => {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
      }, 3000);
    }
  };

  const handleUpdateTask = (e) => {
    // Implementa la lógica para actualizar una tarea
  };

  const handleDeleteTask = (e) => {
    // Implementa la lógica para eliminar una tarea
  };

  const handleGetTasks = (e) => {
    // Implementa la lógica para obtener las tareas
  };

  const handleChangeState = (e) => {
    // Implementa la lógica para cambiar el estado de una tarea
  };


  return {
    tasks,
    Formtask,
    handleChange,
    handleCreateTask,
    handleUpdateTask,
    handleDeleteTask,
    handleGetTasks,
    handleChangeState,
    alerta
  };
}

export default UseTasks;

*/