import React from "react";
import LastProductInDb from "./LastProductInDb";
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
        <LastProductInDb />
          {/*<!-- Last Product in DB -->*/}
          
          {/*<!-- End content row last Product in Data Base -->*/}

          {/*<!-- Categories in DB -->*/}
          <CategoriesInDb />

          {/*<!--End Categories In Db-->*/}
        </div>
      
      {/*<!--End Content Top Bar-->*/}
    </React.Fragment>
  );
}
export default TopBar;
