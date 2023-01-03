import React from 'react';


function ChartUsersRow(props) {
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.nombre}</td>
                <td>{props.apellido}</td>
                <td>{props.email}</td>

            </tr>
        </React.Fragment>
    )
}



export default ChartUsersRow;