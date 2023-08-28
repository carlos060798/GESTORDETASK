import FormTask from "./FormTask";
import TableList from "./TableTask";

function TasksComponet() {
    return ( <>
     <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 ">
        < FormTask/>
        </div>
        <div className=" col-12 col-md-7">
         <TableList/>
        </div>
      </div>

     </div>
    </> );
}

export default TasksComponet;