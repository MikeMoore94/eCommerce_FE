import React, {Component} from 'react';
import { withRouter } from 'react-router';
import './Review.css';

class Review extends Component{
    constructor(props){
        super(props);
        this.state = {
            review: "",
            productRating: 1,

        }
    }

    handlesReviewChanges = (event) => {
        this.setState({
            review: event.target.value,
        })
    }

    handlesProductRatingChanges = (event) => {
        this.setState({
            productRating: event.target.value,
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const { review, productRating } = this.state
        const { match: {params}, userId, addReview } = this.props
        const rating = productRating ? parseInt(productRating) : 0
        const productId =  params.id ? parseInt(params.id) : 0
        const newReview = {
            UserId: userId,
            ProductId: productId,
            Description: review, 
            Rating: rating
        }
     
        addReview(newReview)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                <label>Product Review</label>
                <textarea value={this.state.review} onChange={this.handlesReviewChanges}> </ textarea>
                </ div>
                <div>
                    <label>Product Rating</label>
                    <select value={this.state.productRating} onChange={this.handlesProductRatingChanges}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </ div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default withRouter(Review)