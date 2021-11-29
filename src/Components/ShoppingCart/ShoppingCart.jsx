import { useState } from "react";
import "./ShoppingCart.css"

const ShoppingCart = ({ userId, items, updateQuantity, deleteProduct }) => {
  

  return (
    <div className="cart-card">
      <div>
        {items.map(function (item) {
          return (
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
                <tr key={item.shoppingCartId}>
                  <td>{item.name}</td>
                  <td>${item.price * item.quantity}</td>
                  <td>{item.description}</td>
                  <td>{item.category}</td>
                  <td>{item.rating}</td>
                  <td>
                    <button onClick={() => updateQuantity(item.quantity - 1, item.shoppingCartId)} type="button" className="cart-btn button"> - </button>
                    {item.quantity}
                    <button onClick={() => updateQuantity(item.quantity + 1, item.shoppingCartId)} type="button" className="cart-btn button"> + </button>
                    <button onClick={() => updateQuantity(0, item.shoppingCartId)} type="button" className="cart-btn button"> Remove </button>
                  </td>
                </tr>
              </tbody>
            </table>
          );
        })}
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
  );
};

export default ShoppingCart;
