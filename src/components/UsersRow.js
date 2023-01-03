import React, { useState, useEffect } from "react";
import ChartUsersRow from "./ChartUsersRow";

let tableRowsData = [
  {
    id: "Cargando...",
    nombre: "Cargando...",
    apellido: "Cargando...",
    email: "Cargando...",
  }
]
function UsersRow() {

  let [users, setUsers] = useState(tableRowsData);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then(response => response.json())
      .then(data => {
        let array = data.users
        setUsers(array)
      })

  }, [])
  return (
    /* <!-- DataTales Example --> */
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>

              </tr>
            </thead>

            <tbody>
              {users.map((user, i) => {
                return <ChartUsersRow {...user} key={i} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


export default UsersRow;
