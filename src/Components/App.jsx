import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import {createBrowserHistory} from 'history'
import { Container } from "react-bootstrap";
import NavBar from "./NavBar/NavBar";
import { Router, Route, Switch } from "react-router";
import Login from "./Login/Login";
// import EditProfile from "./EditProfile/EditProfile";
import Register from "./Register/Register";
import ProductList from "./ProductList/ProductList";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import ProductForm from "./ProductList/ProductForm";
import SearchBar from "./SearchBar/SearchBar";
import HeroImage from "./HeroImage/HeroImage";
import ProductDisplay from "./ProductDetails/ProductDisplay";
import ProductDetails from "./ProductDetails/ProductDetails";
import Anon from "./Login/Anon";
import Review from "./Review/Review";
// import HeroImage from "./HeroImage/HeroImage";



const history = createBrowserHistory();
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
        searchTerm: "",
        shoppingCartItems: [],
        productReviews: []
      };
    };

    componentDidMount(){
      this.getCurrentUser();
      this.getProducts();
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

    componentDidUpdate(prevProps, prevState, snapShot){
      const{currentUserId} = this.state;
      if (currentUserId !== prevState.currentUserId){
        this.getProducts();
      }
    }
    

    register = async (registerUser) => {
      let secondRegister = registerUser
      try {

        let response = await axios.post("https://localhost:44394/api/authentication/", registerUser);
        if(response === undefined){
          this.setState({});
        }
        else{
          this.setState({
            registeredUser: response.data,
          });
        }
      } catch (err) {
        console.log("Error in executing authentication api: ",err)
      }

      // await axios.put('https://localhost:44394/api/users/editname' + secondRegister.UserName, secondRegister)
      // history.push("/login");
      // history.go('/login');
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
      catch(err){
        console.log(err);
      }
      history.push('/');
      history.go('/');
    }

    getCurrentUserToken = async () => {
      try{
        const jwt = localStorage.getItem('token');
        if(jwt === undefined){
          this.setState({});
        }
        else{
          this.setState({
            token: jwt,
            loggedIn: true
          });
        };
      }
      catch(err){
        console.log(err);
      }
    }

    getCurrentUser = async () => {
      try{
        const jwt = localStorage.getItem('token');
        let response = await axios.get('https://localhost:44394/api/examples/user', {headers: {Authorization: 'Bearer ' + jwt}});
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
      catch(err){
        console.log(err);
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
      history.push('/');
      history.go('/');
    }

    addItemToShoppingCart = async (productId) => {
      let userId = this.state.currentUserId
      let newCart = {
        ProductId: productId,
        UserId: userId,
        Quantity: 1
      }
      const response = await axios.post('https://localhost:44394/api/shoppingcart/', newCart);
      this.setState({});
      history.push('/cart');
      history.go('/cart');
    }

    updateCartQuantity = async (quantity, shoppingCartId) => {
      const response = await axios.put(`https://localhost:44394/api/shoppingcart/${shoppingCartId}`, {Quantity:quantity})
      this.getProducts();
    }

    getProducts = async () => {
      const {currentUserId} = this.state;
      let cartItems = []
      const productResponse = await axios.get('https://localhost:44394/api/product');
      const reviewResponse = await axios.get('https://localhost:44394/api/reviews');
      if(currentUserId){
      const cartResponse = await axios.get(`https://localhost:44394/api/shoppingcart/${currentUserId}`);
      for (const product of productResponse.data) {
        for (const item of cartResponse.data) {
          if (product.productId === item.productId ){
            product["quantity"]= item.quantity
            product["shoppingCartId"]= item.shoppingCartId
            cartItems.push(product)
          }
        }
      }
    }
      this.setState({
        products: productResponse.data,
        shoppingCartItems: cartItems,
        productReviews: reviewResponse.data
      })
    }

    addProduct = async () => {
      const response = await axios.post('https://localhost:44394/api/product');
      this.setState({});
    }

    editProduct = async () => {
      const response = await axios.patch('https://localhost:44394/api/product/')
      this.setState({})
    }

    deleteProduct= async (productId) =>{
      const response = await axios.delete(`https://localhost:44394/api/product/${productId}`);
      let allProducts = [];
      allProducts = this.state.products;
      let newProducts = [];
      allProducts.map((product)=> {
        if(product.productId !== productId){
          newProducts.push(product)
        }
      })
      this.setState({
        products: newProducts
      })
    }

    addReview = async (review) => {
      const response = await axios.post('https://localhost:44394/api/reviews', review);
      history.push('/store');
      history.go('/store');
    }

    render(){
      return(
        <Container fluid>
          <Router history={history}>
            <NavBar status={this.state.userType} loggedIn={this.state.loggedIn} logout={this.logoutUser} products={this.state.products} formSubmission={this.searchProducts} userId={this.state.user.Id} searchTerm={this.state.searchTerm} />
            <HeroImage />
            <Switch>
            {this.state.loggedIn ? <Route exact path="/" render={() => <SearchBar props={this.state.products} addItemToShoppingCart={this.addItemToShoppingCart} loggedIn={this.state.loggedIn} />}/> : <Route exact path="/" render={() => <Anon />}/>}
            
            <Route exact path='/store' render={() => <ProductList reviews={this.state.productReviews} products={this.state.products} currentUserId={this.state.currentUserId} handleDelete={this.deleteProduct} handleAddToCart={this.addItemToShoppingCart} />} />
            <Route exact path='/login' render={() => <Login login={this.loginUser}/>} />
            <Route exact path='/register' render={() => <Register register={this.register}/>}/>
            {/* <Route exact path='/profile/edit/:id' render={() => <EditProfile user={this.state.user.id} />}/> */}
            <Route exact path='/cart' render={() => <ShoppingCart items={this.state.shoppingCartItems} updateQuantity={this.updateCartQuantity} />}/>
            <Route exact path='/product' render={() => <ProductForm productId={null} currentUserId={this.state.currentUserId} />}/>
            <Route exact path='/reviews/:id' render={() => <Review userId={this.state.user.id} addReview={this.addReview} />}/>
            </Switch>
          </Router>
        </Container>
      )
    }
  }
  
  export default App;