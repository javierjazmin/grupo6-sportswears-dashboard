import React, { useState, useEffect } from "react";
import Card from "./Card";

function ContentTables() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  
  useEffect(() => {
   
   
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  
  useEffect(() => {
    
    
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))     
      .catch((error) => console.log(error));   
      
  }, []);

  useEffect(() => {
    
    
    fetch("http://localhost:3000/api/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);
    
        
        
      

  /*  Cada set de datos es un objeto literal */

  /* <!-- Products in DB --> */

  let productsInDB = {
    title: "Products in Data Base",
    color: "primary",
    quantity: products.count,
    icon: "fa-clipboard-list",
  };

  /* <!-- Total Categories --> */

  let totalCategories = {
    title: " Total Categories",
    color: "success",
    quantity: categories.data.length,
    icon: "fa-award"
  };

  /* <!-- Users quantity --> */

  let usersQuantity = {
    title: "Users quantity",
    color: "warning",
    quantity: users.count,
    icon: "fa-user-check",
  };

  let cardProps = [productsInDB, totalCategories, usersQuantity];

  return (
    <div className="row">
      {cardProps.map((product, i) => {
        return <Card {...product} key={i} />;
      })}
    </div>
  );
}

export default ContentTables;
