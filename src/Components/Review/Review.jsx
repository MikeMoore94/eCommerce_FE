import React, {useState} from "react";
import { useLocation } from "react-router";

const CreateReview = (props) => {
    const location = useLocation();

    const [review, setReview] = useState({
        body : " ",
        starRating : " ",
        productId :location.state.productId

    });

    const handleChange = (event) => {
        setReview(previousState => ({
            ...previousState,
            [event.target.name] : event.target.value
        }) );
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let rating = parseInt(review.starRating);

            let newReview = {
                body : review.body,
                starRating : rating,
                productId : review.productId
            }
            props.addReview(newReview)
    }

    return(
        <div>

            <form action="" onSubmit={handleSubmit}>

                <label htmlFor="">Review: </label>
                <input name="body" value={review.body} onChange={handleChange} type="text"/>
                <label htmlFor="">Rating:</label>
                <select name="starRating" id="starRating" value={review.starRating} onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button type="submit">Submit Review</button>

            </form>

        </div>
    )
}

export default CreateReview;