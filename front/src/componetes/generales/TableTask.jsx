function TableList() {
    return (<>
      <div className={`list-group-item mt-3`}>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <input
            type="checkbox"
           
            className="mx-2"
          />
          <span className="font-weight-bold">saludar</span>
        </div>
        <div>
          <button className="btn btn-danger mx-1">
            <i className="bi bi-x"></i>
          </button>
          <button className="btn btn-success">
            <i className="bi bi-pencil"></i>
          </button>
        </div>
      </div>
      <p className="mb-0">hola</p>
    </div>
      
      
    </> );
}

export default TableList;