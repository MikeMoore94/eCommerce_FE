import React, {Component} from 'react';
import HeroImg from "./HeroImage.css";




class HeroImage extends Component{
    render(){
        return(
            <div class="hero-image">
                <HeroImg></HeroImg>
                <div class="hero-text">
                    <h1 style="font-size:50px">PET SUPPLIES</h1>
                    <p>Get What Your Pet Needs!</p>
                </div>
            </div>
        );
    }
}




export default HeroImage;