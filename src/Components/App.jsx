import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import {createBrowserHistory} from 'history'
import { Container } from "react-bootstrap";
import NavBar from "./NavBar/NavBar";





const logged = createBrowserHistory();
class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        localToken: localStorage.token,
        token: [],
        user: [],
        currentUser: [],
        currentUserId: "",
        registeredUser: [],
        loggedIn: false,
        products: [],
        searchResults: [],
        searchEnable: false,
        userType: false,
        searchTerm: ""
      };
    };

    componentDidMount(){
      this.getProducts();
      this.getCurrentUser();
      if(this.state.localToken && !this.state.token){
        this.getCurrentUserToken();
        this.getCurrentUser();
      }
      else{
        this.setState({
          loggedIn: false,
        });
      }
    }

    register = async (registerUser) => {
      let secondRegister = registerUser
      let response = await axios.post("https://localhost:44394/api/authentication/", registerUser);
      if(response === undefined){
        this.setState({});
      }
      else{
        this.setState({
          registeredUser: response.data,
        });
      }

      await axios.put('https://localhost:44394/api/users/editname' + secondRegister.UserName, secondRegister)
      logged.push("/login");
      logged.go('/login');
    }

    loginUser = async(login) => {
      try{
        let response = await axios.post('https://localhost:44394/api/authentication/login', login);
        if(response === undefined){
          this.setState({});
        }
        else{
          this.setState({
            token: response.data.token,
          });
          localStorage.setItem('token', response.data.token);
        }
      }
      catch(error){
        console.log(error);
      }
      logged.push('/');
      logged.go('/');
    }

    getCurrentUserToken = async () => {
      try{
        const retrieve = localStorage.getItem('token');
        if(retrieve === undefined){
          this.setState({});
        }
        else{
          this.setState({
            token: retrieve,
            loggedIn: true
          });
        };
      }
      catch(error){
        console.log(error);
      }
    }

    getCurrentUser = async () => {
      try{
        const retrieve = localStorage.getItem('token');
        let response = await axios.get('https://localhost:44394/api/examples/user', {headers: {Authorization: 'Bearer ' + retrieve}});
        if(response === undefined){
          this.setState({});
        }
        else{
          this.setState({
            user: response.data,
            loggedIn: true,
            currentUserId: response.data.id,
          });
        }
      }
      catch(error){
        console.log(error);
      }
      if(this.state.user.type === "Seller"){
        this.setState({userType:true})
      }
    }

    logoutUser = () => {
      localStorage.removeItem('token');
      this.setState({
        loggedIn: false,
        currentUser: []
      })
      logged.push('/');
      logged.go('/');
    }

    addItemToShoppingCart = async (ProductId) => {
      let userId = this.state.user.id
      let newCart = {
        "productId": ProductId,
        "userId": userId,
        "quantity": 1
      }
      const response = await axios.post('https://localhost:44394/api/shoppingCart/addProduct/', newCart);
      this.setState({});
      logged.push('/cart');
      logged.go('/cart');
    }

    getProducts = async () => {
      const response = await axios.get('https://localhost:44394/api/products');
      this.setState({
        products: response.data
      })
    }

    addProduct = async () => {
      const response = await axios.post('https://localhost:44394/api/products');
      this.setState({});
    }

    editProduct = async () => {
      const response = await axios.patch('https://localhost:44394/api/products/edit/')
      this.setState({})
    }

    deleteProduct= async (ProductId) =>{
      const response = await axios.delete(`https://localhost:44394/api/products/delete/${ProductId}`);
      let allProducts = [];
      allProducts = this.state.products;
      let newProducts = [];
      allProducts.map((product)=> {
        if(product.ProductId !== ProductId){
          newProducts.push(product)
        }
      })
      this.setState({
        products: newProducts
      })
    }

    render(){
      return(
        <Container fluid>
          <NavBar />
     

        </Container>
      )
    }
  }
  
  export default App;