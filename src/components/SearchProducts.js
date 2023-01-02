import React, { useState, useEffect, useRef } from 'react';


function SearchProducts(){

	const [products, setProducts] = useState([]);

	
	const [keyword, setKeyword] = useState(['adidas']);

	const inputSearch = useRef();


	useEffect(() => {

		const url = `http://localhost:3000/api/products/`

		fetch(url)
        .then( res => res.json())
        .then( data => setProducts(data.Search))
        .catch( error => console.log(error))

	}, [keyword]);

	const search = function(event){
		event.preventDefault();
		const inputValue = inputSearch.current.value
		setKeyword(inputValue);
		inputSearch.current.value = "";

	}

	

	
	return(
		<div className="container-fluid">
			{
				
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form  method="GET" onSubmit={search}>
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input ref={inputSearch} type="text" className="form-control" />
								</div>
								<button className="btn btn-info">Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Productos para la palabra: {keyword}</h2>
						</div>
						{/* Listado de productos */}
						{
							products.length > 0 && products.map((product, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={product.image}
														alt={product.name} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{product.year}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ products.length === 0 && <div className="alert alert-warning text-center">No se encontraron productos</div>}
				</>
				
			}
		</div>
	)
}

export default SearchProducts;