import React from 'react';
import Card from './Card';

/*  Cada set de datos es un objeto literal */

/* <!-- Products in DB --> */

let productsInDB = {
    title: 'Products in Data Base',
    color: 'primary', 
    quantity: 23,
    icon: 'fa-clipboard-list'
}

/* <!-- Total Categories --> */

let totalCategories = {
    title:' Total Categories', 
    color:'success', 
    cuantity: '7',
    icon:'fa-award'
}

/* <!-- Users quantity --> */

let usersQuantity = {
    title:'Users quantity' ,
    color:'warning',
    cuantity:'3',
    icon:'fa-user-check'
}

let cardProps = [productsInDB, totalCategories, usersQuantity];

function ContentTables(){
    return (
    
        <div className="tables">
            
            {cardProps.map( (product, i) => {

                return <Card {...product} key={i}/>
            
            })}

        </div>
    )
}

export default ContentTables;