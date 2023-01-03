import React, { useState, useEffect } from 'react';
/*import imagenFondo from "../assets/images/andy_murray.jpg";*/


function LastProductInDb(props) {

  const [lastProduct, setLastProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products/lastProduct")
      .then((response) => {
        return response.json();
      })
      .then((product) => {
        console.log(product);
        setLastProduct(product.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="col-lg-6 mb-4 bg-secondary">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Last Product in Data Base
          </h5>
        </div>
        {lastProduct.length === 0 && (
          <div className="card-body backgroundContainer">Loading...</div>
        )}
        {lastProduct.map((product, i) => {
          return (
            <div key={i} className="card-body">
              <h6 className="m-0 font-weight-bold text-gray-800">
                {product.name}
              </h6>
              <div className="text-center">
                <img
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: 40 + "rem" }}
                  src={
                    "http://localhost:3000/images/" +
                    product.image
                    
                  }
                  alt={product.name}
                />
              </div>
             
                 <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
            View Product detail
          </a> 
            </div>
          );
        })}
      </div>
    </div>
      )
}

export default LastProductInDb;