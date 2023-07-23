import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageInicio from "./pages/layaut";
import Nosotros from "./pages/About";
import LayautAdmin from "./componetes/Admin";
import Home from "./pages/Inicio";
import Section from "./componetes/generales/login"; 
import FormTask from "./componetes/generales/FormTask";
import TableList from "./componetes/generales/TableTask";
import Perfils from "./componetes/generales/Perfil";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageInicio/>} >
        <Route index path="/inicio" element={<Home/>}/>
        <Route path="/about" element={<Nosotros/>}/> 
        <Route path="/login" element={<Section/>}/> 
        </Route>

        <Route path="/admin" element={<LayautAdmin/>}> 
          <Route path="creartask" element={<FormTask/>}/>
          <Route path="listtable" element={<TableList/>}/>
          <Route path="perfil" element={<Perfils/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;