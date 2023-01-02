import React, { Component } from "react";
import Category from "./Category";

class CategoriesInDb extends Component {
  constructor() {
    super();
    this.state = {
      categoriesList: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/products/categories")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((categories) => {
        console.log(categories);
        this.setState({ categoriesList: categories.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <React.Fragment>
        {/*<-- Categories in DB -->*/}
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-gray-800">
                Categories in Data Base
              </h6>
            </div>

            <div className="card-body fondoCaja">
              <div className="row">
                {this.state.categoriesList.map((category, index) => {
                  return <Category {...category} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default CategoriesInDb;
