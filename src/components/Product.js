import React from 'react';

function Product(props){
    return(
        <React.Fragment>
            <div className="col-products">
                <div className="card text">
                    <div className="card-body">
                        {props.name}
                        
                        {props.brand}

                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "15rem" }} src={props.image_url} alt=""/>
                        
                       
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Product;