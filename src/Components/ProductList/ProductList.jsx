import React, { Component } from "react";
import "./ProductList.css";

export class ProductList extends Component {
  render() {
    const { products, currentUserId, handleDelete } = this.props;
    return (
      <div>
          <a href="/product"> Sell an item </a>
        {products.map(function (product) {
          return (
            <table className="productTable">
              <thead>
                <tr>
                  {currentUserId === product.userId ? <th> Action </th> : null}
                  <th> Name </th>
                  <th> Price </th>
                  <th> Description </th>
                  <th> Category </th>
                  <th> Rating </th>
                </tr>
              </thead>
              <tbody>
                <tr key={product.productId}>
                  {currentUserId === product.userId ? (
                    <td>
                      {" "}
                      <button onClick={() => handleDelete(product.productId)}>Delete</button>{" "}
                    </td>
                  ) : null}
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                  <td>{product.category}</td>
                  <td>{product.rating}</td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    );
  }
}

export default ProductList;
