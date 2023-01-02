import React from 'react';

function Product(props){
    return(
        <React.Fragment>
            <div className="col-products">
                <div className="card text">
                    <div className="card-body">
                        {props.name}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Product;