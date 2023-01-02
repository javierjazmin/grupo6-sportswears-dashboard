import React from "react";
import ChartUsersRow from "./ChartUsersRow";

let tableRowsData = [
  {
    nombre: "Valentina",
    apellido: "Adle",
    telefono: "298383733",
    Categories: ["Running", "Mujer"],
    genero: "Mujer",
  },
  {
    nombre: "Joaquin",
    apellido: "Leklere",
    telefono: "28837464",
    Categories: ["Futbol", "Hombre"],
    genero: "Hombre",
  },
  {
    nombre: "Javier",
    apellido: "Jazmin",
    telefono: "113348484",
    Categories: ["Tennis", "Hombre"],
    genero: "Hombre",
  },
];

function UsersRow() {
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
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Telefono</th>
                <th>Género</th>
              </tr>
            </thead>
            <tmidlle>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Telefono</th>
                <th>Género</th>
              </tr>
            </tmidlle>
            <tfoot>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Telefono</th>
                <th>Género</th>
              </tr>
            </tfoot>
            <tbody>
              {tableRowsData.map((row, i) => {
                return <ChartUsersRow {...row} key={i} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UsersRow;
