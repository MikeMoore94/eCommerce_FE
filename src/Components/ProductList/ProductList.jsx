import React, { Component } from "react";
import "./ProductList.css";

export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: "",
    };
  }
  render() {
    const { products, currentUserId, handleDelete, handleAddToCart } =
      this.props;
    return (
      <div>
          <a href="/product"> Sell an item </a>
          <div>
            {products.map(function (product) {
              return (
                <table className="productTable">
                  <thead>
                    <tr>
                      <th> Action </th>
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
                          <button
                            onClick={() => handleDelete(product.productId)}
                          >
                            Remove
                          </button>{" "}
                        </td>
                      ) : (
                        <td>
                          {" "}
                          <button
                            onClick={() => handleAddToCart(product.productId)}
                          >
                            Add To Cart
                          </button>{" "}
                        </td>
                      )}
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.description}</td>
                      <td>{product.category}</td>
                      <td>
                        {product.rating}
                      </td>
                    </tr>
                  </tbody>
                </table>
              );
            })}
          </div>
        )
      </div>
    );
  }
}

export default ProductList;
