// import React, {useState} from 'react'
// import {BrowserRouter as Router, Link} from "react-router-dom";

// const ProductCard=(props)=> {
    
//     const[linkPath, setLinkPath]=useState(`/ProductDetail/${props.products.ProductsId}` )
    
//     if (!props.products) {
//         return <div>no products</div>;
//       }

//     return ( 
//         <>
//             <div className="product-card">
//                 <div className="row product-card-row">
//                     <div className="bc-details row">
//                         <div className="col-6">
//                             <p>{props.products.name}
//                             <br />{props.products.price}
//                             <br />{props.products.description}</p>
//                         </div>
//                         <div className="col-6">
//                         <br />{props.loggedIn ? <button className="detail-btn" ><Link to={linkPath} render={() => <ProductDetailPage2 {...props} ProductId={props.products.ProductId} />}> View Product Details </Link></button> : "Please login to see Product details" }
//                         <br />{props.loggedIn ? <button className="detail-btn" onClick={() => props.addProductToShoppingCart(props.products.ProductsId)}> Add to Cart </button> : "Please login to add to cart" }
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//      );
// }

// export default ProductCard;