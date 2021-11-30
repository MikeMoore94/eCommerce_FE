import React from 'react';
import Review from './Review'

const DisplayReview = (props) => {





    return(
        <div>
            <p>Welcome to book reviews</p>
            <Review
                reviews={props.reviews}
                postReview={props.postReview}
                getReviews={props.getReviews}
                product={props.product}
                user={props.user}
            />
            {props.reviews?.map((review, index ) => {
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