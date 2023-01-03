import React from "react";

function Category(props) {
  return (
    <React.Fragment>
      <div className="col-lg-6 mb-4">
        <div className="card text">
          <div className="card-body">{props.name}</div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Category;
