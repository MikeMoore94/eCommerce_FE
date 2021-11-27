import React, { Component } from 'react'

export class ProductList extends Component {


    render() {
        const {products} = this.props
        console.log(products)
        return (
            <div>
                {
                    products.map(function(product){
                        return(
                            <div key={product.productId}>
                            <div>{product.name}</div>
                            <div>{product.price}</div>
                            <div>{product.description}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


export default ProductList
