import React, {useState, useEffect} from "react";
import "./SearchBar.css";
import SingleProduct from "./SingleProduct";
import axios from "axios";


const SearchBarSection = (props)=> {
      const [products, setProductList] = useState([props.props])
      const [searchTerms, setSearchTerms]= useState([])
      const [searchResults, setSearchResults] = React.useState([]);
  
      const handleChange = event => {
          setSearchTerms(event.target.value);
        };
  
        useEffect(() => {
              let tempSearchResults = []
              let tempProductList=props.props
              let tempTerm = searchTerms
              let tempSearchReults = tempProductList.map(function(product){
                  if(product.name.toLowerCase().includes(searchTerms)){
                      tempSearchResults.push(product);
                  }
              })
          setSearchResults(tempSearchResults);
        }, [searchTerms]);
  
  
  
      const baseURL = 'https://localhost:44394/api/product'
      const productAPI = () => {
          return {
              fetchAll: () => axios.get(baseURL),
          }
      }
      function refreshProductList() {
          productAPI().fetchAll()
              .then(res => {
                  setProductList(res.data)
              })
              .catch(err => console.log(err))
      }
      if (props.props === undefined) {
          return (
              <h1>No products to see here!</h1>
          )};

  return (
    <div className="searchBarSection">
      <div class="searchBar">
        <input
          className="input"
          type="text"
          id="header-search"
          placeholder="Search Products"
          name="searchTerm"
          vlaue={searchTerms}
          onChange={handleChange}
        />
        <button className="button">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="display">
        {searchResults.map((product) => (
          <div key={product.productId} className= "col-lg-3 col-md-3 col-sm-4 col-xsm-10 col-for-card">
            <SingleProduct product={product} loggedIn={props.loggedIn} addItemToShoppingCart={props.addItemToShoppingCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBarSection;

