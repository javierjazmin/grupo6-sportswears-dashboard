import React from "react";
import imagenFondo from "../assets/images/andy_murray.jpg";
import CategoriesInDb from "./CategoriesInDb";
import ContentTables from "./ContentTables";
function TopBar() {
  return (
    <React.Fragment>
      {/*<!-- Content TopBar-->*/}
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">SportsWear Dashboard</h1>
        </div>

        {/*<!-- Content Tables-->*/}
        <ContentTables />
        {/*<!-- End Content Tables -->*/}

        {/*<!-- Content Row Last Product in Data Base -->*/}
        <div className="row">
          {/*<!-- Last Product in DB -->*/}
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
                    className="img-fondo"
                    style={{ width: 40 + "rem" }}
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
          {/*<!-- End content row last Product in Data Base -->*/}

          {/*<!-- Categories in DB -->*/}
          <CategoriesInDb />

          {/*<!--End Categories In Db-->*/}
        </div>
      </div>
      {/*<!--End Content Top Bar-->*/}
    </React.Fragment>
  );
}
export default TopBar;
