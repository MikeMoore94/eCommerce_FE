import { useState } from "react";

const ShoppingCart = ({ userId, items, updateQuantity, deleteProduct }) => {

    // const [count, setCount] = useState(product.quantity);

    // const onClickQuantity = () =>{
    //     if(count == 0){
    //         deleteProduct(product.productId);
    //     }
    //     else{
    //         updateQuantity(userId, product.productId, count);
    //     }
    // }

    return (
        <div className="cart-card">
            <div>
                {
                    items.map(function(item){
                        return(
                            <table className="productTable">
                                <thead>
                                    <tr>
                                        <th> Name </th>
                                        <th> Price </th>
                                        <th> Description </th>
                                        <th> Category </th>
                                        <th> Rating </th>
                                        <th> Quantity </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr key={item.productId}>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.description}</td>
                                        <td>{item.category}</td>
                                        <td>{item.rating}</td>
                                        <td>{item.quantity}</td>
                                    </tr>
                                </tbody>
                             </table>       
                        )
                    })
                }
            </div>
            {/* <div className="cart-card-footer">
                <div class="cart-btn-group" role="group" aria-label="Basic outlined example">
                    <button onClick={() => setCount(count - 1)} type="button" className="cart-btn">-</button>
                    <button type="button" className="cart-btn">{count}</button>
                    <button onClick={() => setCount(count + 1)} type="button" className="cart-btn">+</button>
                    <button onClick={onClickQuantity} type="button" className="cart-btn">Update</button>
                </div>
            </div> */}
        </div>
    )
};

export default ShoppingCart;