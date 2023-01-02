import React from 'react';
import ErrorImg from "../assets/images/error404.jpg";

function NotFound(){
    return (
        <div>
          <img src={ErrorImg} alt="imagen error 404"></img>
          <h3>ERROR 404 - LA RUTA ESPECIFICADA NO EXISTE</h3>
        </div>
        
    )
}
export default NotFound;