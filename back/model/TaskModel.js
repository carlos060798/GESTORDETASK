import mongoose from "mongoose"; 

const taskSchema = mongoose.Schema({
  titulo:{
    type: String,
    required: true,

  },
  descripcion:{
  type: String,
  required: true,
  },
  complete:{
    type: Boolean,
    default: false,
  },
  usuario:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "veterinario"
  },
},
{
    timestamps: true,
}

)

const  Tarea= mongoose.model('Tarea', taskSchema);

export default Tarea;