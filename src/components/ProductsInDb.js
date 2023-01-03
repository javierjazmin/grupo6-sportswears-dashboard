import React, { Component } from 'react';
import Product from './Product';

class ProductsInDb extends Component{

    constructor() {
        super()
        this.state = {
            productsList: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/api/products")
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((products) => {
            console.log(products)
            this.setState({ productsList: products.data });
          })
          .catch((error) => console.log(error));
    }    

   
    render() {
        return (
            <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Products in Data Base</h6>
                        </div>

                        <div className="card-body fondoCaja">
                            <div className="row">
                                {
                                    this.state.productsList.map((product, index) => {
                                        return <Product {...product} key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
export default ProductsInDb;