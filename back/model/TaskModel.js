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
  fecha:{
    type: Date,
    required: true,
    default: Date.now()
   },
  complete:{
    type: Boolean,
    default: false,
  }, 
  usuario:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario"
  },

},

)

const  Tarea= mongoose.model('Tarea', taskSchema);

export default Tarea;