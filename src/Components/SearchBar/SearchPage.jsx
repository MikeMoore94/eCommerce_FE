import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ProductList from "../ProductList/ProductList"

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [productListDefault, setProductListDefault] = useState();
  const [productList, setProductList] = useState();

  const fetchData = async () => {
    return await fetch('https://localhost:44394/api/product')
      .then(response => response.json())
      .then(data => {
         setProductyList(data) 
         setProductListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = countryListDefault.filter(country => {
      return country.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setCountryList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <h1>Product List</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <ProductList productList={productList}/>
    </>
   );
}

export default SearchPage