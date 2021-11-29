import React, {useState, useEffect} from 'react'
import { withRouter } from 'react-router-dom';
import ProductDetails from './ProductDetails';




const ProductDisplay = (props) =>{
    const [product, setProduct] = useState([props.products[0]])


    useEffect(()=>{
        let loggedIn = props.loggedIn
        
    }, [props])

    return ( 
        <> 
            <div >
            <ProductDetails product={product} userId={props.userId}/>
            </div>
        </>
     );
}

export default withRouter (ProductDisplay);