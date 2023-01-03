import React from 'react';
import imagenFondo from "../assets/images/andy_murray.jpg";


function LastProductInDb(){
	
	return(
		<div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                  Last Product in Data Base
                </h5>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                    style={{ width: 30 + "rem" }}
                    src={imagenFondo}
                    alt=" Andy - Murray "
                  />
                </div>
                <p>
                  In celebration of the Andy Flow 10 launch, Andy’s Brand will
                  bring back fan-favorite models and colorways paying homage to
                  some of Andy’s most iconic moments
                </p>
                <a
                  className="btn btn-danger"
                  target="_blank"
                  rel="nofollow"
                  href="/"
                >
                  View product detail
                </a>
              </div>
            </div>
          </div>
	</div>
	)
}

export default LastProductInDb;