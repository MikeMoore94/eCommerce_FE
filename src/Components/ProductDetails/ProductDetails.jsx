
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';

const ProductDetails = (props) =>{
    const {urlProductId} = useParams();
    const [productId, setProductId] = useState(urlProductId);
    const userId = props.userId;
    const[product, setProduct] = useState([]);
    const [productReviewList, setProductReviewList] = useState([]);
    const [productRating, setRating] = useState([]);
    const[productReview, setReview] = useState([]);
    const[newReview, setNewReview] = useState("");
    const[newRating, setNewRating] = useState(null);
    const[allRelevant, setAllRelevant]=useState([]);
    const[reviewStatus, setReviewStatus]=useState(false);
    const baseURL = 'https://localhost:44394/api/reviews'
    const getByProduct = '/product/' + productId
    const createURL = '/create'
    const editURL = '/edit/'
    const deleteURL = '/delete/'

    const reviewAPI = () => {
        return{
            getAll: () => axios.get(baseURL),
            create: newRecord => axios.post(baseURL + createURL, newRecord),
            update: (ProductId, updateRecord) => axios.put(baseURL + editURL + ProductId, updateRecord),
            delete: id => axios.delete(baseURL + deleteURL + id)
        }
    }

    const getMyProduct = () => {
        return{
            fetch: () => axios.get('https://localhost:44394/api/product/' + productId),
        }
    }

    useEffect(()=>{
        setProduct();
        refreshProductReviewList();
        filterReviews();
    }, [props])

    function refreshProductReviewList(){
        reviewAPI().getAll().then(res=>{
            setProductReviewList(res.data)
        })
        .catch(err => console.log(err))
    }

    const filterReviews = () =>{
        let allRelevantReviews = []
        let allRelevantRatings = []
        let allRelevant = []
        productReviewList.map(function(review){
            if(review.productId == productId){
                let productReview = review.review
                let productRating = review.rating
                allRelevantReviews.push(productReview)
                allRelevantRatings.push(productRating)
                allRelevant.push(review)
            }
        setRating(allRelevantRatings)
        setReview(allRelevantReviews)
        setAllRelevant(allRelevant)
        })
        if(allRelevant.length > 0){
            setReviewStatus(true)
        }
    }

    const onChange = (event) =>{
        setNewReview(event.target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        let parsedProductId = parseInt(productId)
        const NewReview = {
            productId: parsedProductId,
            userId: userId,
            rating: newRating,
            review: newReview
        }
        reviewAPI().create(NewReview)
        refreshProductReviewList()
        filterReviews()
    }

    const onDropdownChange = (event) =>{
        let tempRating = (event.target.value)
        let newRating = parseInt(tempRating);
        setNewRating(newRating)
    }

    return (
        <div className="product-image"  >
            <div className="product-details">
                <div className="row">
                    <div className="col-1" />
                    <div className="col-3">
                        
                    </div>
                    <div className="col-7 product-details-box">
                        <div className="row2">
                            <p className="product-name">{product.name}</p>
                            <p className="product-price">{product.price}</p>
                            <p className="product-description">{product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row review-row">
            <div className="col-1">

            </div>
            <div className="col-4 review-box">
                    {reviewStatus ? null : <p> Be the first to leave a review!</p>}
                        {allRelevant.map(function(review){
                            return(
                                <p>{review.rating}/5 -- "{review.review}"</p>
                            )
                        })}
                        <p>{newRating} {newReview}</p>
                    </div>
                    <div className="col-1">
                        
                    </div>
                    <div className="col-5">
                        <form onSubmit={onSubmit}>
                            <div className="row rating-row">
                                <select onChange={onDropdownChange} name="newRating">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="row">
                                <input type="text" name="newReview" onChange={onChange}placeholder="Your review here..."></input>
                            </div>
                            <div className="row">
                                <button type="submit">Submit Review</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-1">

                    </div>
                </div>
            </div>
    )
}
export default ProductDetails;