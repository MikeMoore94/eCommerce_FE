import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductDisplay from "../ProductDetails/ProductDisplay";
import "./ProductList.css";
import { Route } from "react-router";

export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: "",
    };
  }
  render() {
    const { reviews, products, currentUserId, handleDelete, handleAddToCart } =
      this.props;
    return (
      <div>
          <a href="/product"> Sell an item </a>
          <div>
            {products.map(function (product) {
              let rating = 0
              let numReviews = 0
              for (const review of reviews) {
                if (product.productId === review.productId) {
                  rating = rating + review.rating
                  numReviews++
                }
              }
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
                      <td>${product.price}</td>
                      <td>{product.description}</td>
                      <td>{product.category}</td>
                      <td>
                        {rating !== 0 && numReviews !== 0 ?  (rating/numReviews).toFixed(1) : 0}
                        <Link to={`/reviews/${product.productId}`}>Leave A Review</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              );
            })}
          </div>
      </div>
    );
  }
}

export default ProductList;
