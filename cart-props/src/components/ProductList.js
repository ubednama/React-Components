import React from 'react';
import Product from './Product'

export default function ProductList(props) {
    // console.log(props)
    return (
        props.ProductList.length > 0 ?
        props.ProductList.map((product,i)=>{
            return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} decrementQuantity={props.decrementQuantity} removeItem={props.removeItem} index={i}/>
        }) : <h1>Your cart is empty, add some products.</h1>
    )
}
