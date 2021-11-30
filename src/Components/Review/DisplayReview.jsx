import React, { useState } from 'react';
import { useLocation } from 'react-router';
import Review from './Review'

const DisplayReview = (props) => {

    let location =useLocation()
    const[reviews, setReviews] = useState();

    const makeAPICall = ()=>{

    }



    return(
        <div>
            <p>Welcome to Pet Supply reviews</p>
            {/* <Review
                reviews={props.reviews}
                postReview={props.postReview}
                getReviews={props.getReviews}
                product={props.product}
                user={props.user}
            /> */}
            {reviews.description.map((review, index ) => {
                return (
                <ul>
                    <li key={index}> {review.body} {review.starRating}  </li>
                </ul>
                )}
            )}


        </div>
    )
}

export default DisplayReview;