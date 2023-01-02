import React from 'react';


function ChartUsersRow(props){
    return (
                <tr>
                    <td>{props.nombre}</td>
                    <td>{props.apellido}</td>
                    <td>{props.telefono}</td>
                    <td>
                        <ul>
                            {props.Categories.map( (category,i) => 
                                <li key={`category ${i}`}>{category}</li>
                            )}
                        </ul>
                    </td>
                    <td>{props.genero}</td>
                </tr>
            )
    }
    
        

export default ChartUsersRow;