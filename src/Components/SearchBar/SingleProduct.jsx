import React, {useState} from 'react'
import {BrowserRouter as Router, Link} from "react-router-dom";
import ProductDisplay from '../ProductDetails/ProductDisplay';

const SingleProduct=(props)=> {
    
    const[linkPath, setLinkPath]=useState(`/product/${props.product.productId}` )
    
    if (!props.product) {
        return <div>no items</div>;
      }

    return ( 
        <>
            <div className="product-single">
                <div className="row book-card-row">
                    <div className="bc-details row">
                        <div className="col-6">
                            <p>{props.product.name}
                            <br />{props.product.description}
                            <br />{props.product.price}</p>
                        </div>
                        <div className="col-6">
                        <br />{props.loggedIn ? <button className="detail-btn" ><Link to={linkPath} render={() => <ProductDisplay {...props} productId={props.product.productId} />}> View Item Details </Link></button> : "Please login to see Item details" }
                        <br />{props.loggedIn ? <button className="detail-btn" onClick={() => props.addItemToShoppingCart(props.product.productId)}> Add to Cart </button> : "Please login to add to cart" }
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default SingleProduct;