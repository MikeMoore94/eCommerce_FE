// import React, {useState, useEffect} from 'react'
// import ProductCard from './ProductCard'
// import { withRouter } from 'react-router-dom';
// import {useParams} from "react-router-dom";
// import axios from "axios";

// //comment

// const MainBody = (props)=> {
//     const [productList, setBookList] = useState([props.props])
//     const [searchTerms, setSearchTerms]= useState([])
//     const [searchResults, setSearchResults] = React.useState([]);

//     const handleChange = event => {
//         setSearchTerms(event.target.value);
//       };

//       useEffect(() => {
//             let tempSearchResults = []
//             let tempProductList=props.props
//             let tempTerm = searchTerms
//             let tempSearchReults = tempProductList.map(function(products){
//                 if(products.name.toLowerCase().includes(searchTerms)){
//                     tempSearchResults.push(products);
//                 }
//             })
//         setSearchResults(tempSearchResults);
//       }, [searchTerms]);



//     const baseURL = 'https://localhost:44394/api/products'
//     const productAPI = () => {
//         return {
//             fetchAll: () => axios.get(baseURL),
//         }
//     }
//     function refreshProductList() {
//         productAPI().fetchAll()
//             .then(res => {
//                 setProductList(res.data)
//             })
//             .catch(err => console.log(err))
//     }
//     if (props.props === undefined) {
//         return (
//             <h1>No products to see here!</h1>
//         )};


//     return ( 
//         <>
//             <form className="search-bar-form" autoComplete="off" noValidate>
//                 <label className="search-label" htmlFor="header-search"></label>
//                 <input
//                     className = "search-field"
//                     type="text"
//                     id="header-search"
//                     placeholder="Search books..."
//                     name="searchTerm"
//                     value={searchTerms}
//                     onChange={handleChange}
//                 />
//             </form>
                
//                 <div className="row main-body">

//                     {searchResults.map((product) => {
//                             return(
//                                 <>
//                                     <div key={product.ProductsId} className= "col-lg-3 col-md-3 col-sm-4 col-xsm-10 col-for-card">
//                                         <ProductCard product={products} loggedIn={props.loggedIn} addProductToShoppingCart={props.addProductToShoppingCart}/>
//                                     </div>
//                                     <div className="col-1"></div>
//                                 </>
//                             )
//                         })}
//                 </div>
        
//         </> 
//     );
// }

// export default withRouter (MainBody);