import jwtDecode from "jwt-decode";
import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import axios from "axios";
import "./App.css";

import Login from "./Login/Login";
import ProductList from "./ProductList/ProductList";





class App extends Component {
    state = {
      loggedInUser: null,
      products: [],
      cart:[],
    };
  
    componentDidMount() {
      const jwt = localStorage.getItem("token");
      this.getAllProducts();
      try {
        const user = jwtDecode(jwt);
        this.setState({ loggedInUser: user });
        console.log(this.state.products);
      } catch (error) {
        console.log(error);
      }
    }
    getAllProducts = async ()  => {
      let response = await axios.get('https://localhost:44394/api/products') ;
      this.setState({
        products : response.data,
      });
    }
    

    userLogin = async (login) => {
        try {
          let response = await axios.post('https://localhost:44394/api/authentication/login', login);
          console.log(response);
          this.setState({
            user: response.data.token
          });
          localStorage.setItem('token', response.data.token);
          alert(`Welcome!`)
          window.location = '/';
        } catch(error) {
          alert('Username and/or password is incorrect. Try again or create account');
        }
      }

    render(){
        return(
          
          <div>
            <Router>
              <Route
                path="/profile"
                render={(props) => {
                  if (!this.state.user) {
                    return (<Login {...props} userLogin={this.userLogin} />);
                  } else {
                    return( <ProductList {...props} productList={this.state.products} search={this.search} />);
                  }
                }}
              />
              <Route path="/login" render={props => <Login {...props} userLogin={this.userLogin} />} />
              
          
  
            </Router>
            </div>
         
      );
    }
  }
  
  export default App;