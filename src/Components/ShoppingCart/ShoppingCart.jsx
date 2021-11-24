import { useState } from "react";

const ShoppingCart = ({ userId, product, updateQuantity, deleteProduct }) => {

    const [count, setCount] = useState(product.Quantity);

    const onClickQuantity = () =>{
        if(count == 0){
            deleteProduct(product.productId);
        }
        else{
            updateQuantity(userId, product.productId, count);
        }
    }

    return (
        <div className="cart-card">
            <div className="cart-card-footer">
                <div class="cart-btn-group" role="group" aria-label="Basic outlined example">
                    <button onClick={() => setCount(count - 1)} type="button" className="cart-btn">-</button>
                    <button type="button" className="cart-btn">{count}</button>
                    <button onClick={() => setCount(count + 1)} type="button" className="cart-btn">+</button>
                    <button onClick={onClickQuantity} type="button" className="cart-btn">Update</button>
                </div>
            </div>
        </div>
    )
};

export default ShoppingCart;