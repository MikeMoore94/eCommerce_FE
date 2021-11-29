import React, {Component} from 'react';
import './Review.css';

class Review extends Component{
    constructor(props){
        super(props);
        this.state = {
            review: "",
            product_id: '',
            product_rating:'',

        }
    }

    handlesReviewChanges = (event) => {
        this.setState({
            review: event.target.value,
        })
    }

    handlesProductRatingChanges = (event) => {
        this.setState({
            product_rating: event.target.value,
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
     
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
                    <select value={this.state.product_rating} onChange={this.handlesProductRatingChanges}>
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

export default Review