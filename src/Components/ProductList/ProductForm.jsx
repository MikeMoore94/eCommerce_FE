import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

var pathArray = window.location.pathname.split("/");
var secondLevelLocation = pathArray[2];

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: [],
      UserId: secondLevelLocation,
      name: "",
      price: "",
      description: "",
      category: "",
    };
  }

  getCurrentProduct = async () => {
    try {
      let getURL =
        "https://localhost:44394/api/product/" + this.props.productId;
      let response = await axios.get(getURL);

      this.setState({
        name: response.data.name,
        description: response.data.description,
        price: response.data.price,
        category: response.data.category,
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { productId, currentUserId } = this.props;
    const price = this.state.price ? parseInt(this.state.price) : 0
    const product = {
      UserId: currentUserId,  
      Name: this.state.name,
      Price: price,
      Description: this.state.description,
      Category: this.state.category,
    };
    try {
      let getURL = "https://localhost:44394/api/product/";
      if (productId) {
        getURL = getURL + productId;
        axios.put(getURL, product);
      } else {
        axios.post(getURL, product);
      }
    } catch (err) {
      console.log(err);
    }
    history.push("/");
    history.go("/");
  };

  render() {
    return (
      <div className="bod-bg-img">
        <div className="row">
          <Col sm={6}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicRegister">
                <Row>
                  <Col sm={6}>
                    <Form.Label className="pro-label">Product Name</Form.Label>
                    <Form.Control
                      className="pro-field"
                      type="text"
                      name="name"
                      placeholder={this.state.name}
                      onChange={this.handleChange}
                      value={this.state.name}
                    />
                  </Col>
                  <Col sm={6}>
                    <Form.Label className="pro-label">Price</Form.Label>
                    <Form.Control
                      className="pro-field"
                      type="text"
                      name="price"
                      onChange={this.handleChange}
                      value={this.state.price}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col sm={12}>
                    <Form.Label className="pro-label">Desctiption</Form.Label>
                    <Form.Control
                      className="pro-field"
                      type="text"
                      name="description"
                      onChange={this.handleChange}
                      value={this.state.description}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col sm={4}>
                    <Form.Label className="pro-label">Category</Form.Label>
                    <Form.Control
                      className="pro-field"
                      type="text"
                      name="category"
                      onChange={this.handleChange}
                      value={this.state.category}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicButton">
                <button
                  className="pro-btn basic-btns"
                  type="submit"
                  value="Submit"
                >
                  Save
                </button>
              </Form.Group>
            </Form>
            <Col sm={1}></Col>
          </Col>
        </div>
      </div>
    );
  }
}
export default withRouter(ProductForm);
