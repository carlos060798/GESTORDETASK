import express  from "express"; 

import dotenv from "dotenv";
import connectDB from "./db/bd.js";
import UserRouter from "./route/userRouter.js";


// creacion de servidor
const app = express();
app.use(express.json()); 
dotenv.config(); 
connectDB(); 


// rutas de  la aplicacion


app.use("/api/Usuario", UserRouter);



// para correr el servidor
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log("Servidor ejecutandose en el puerto 4000");
});