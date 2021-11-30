import React, {Fragment, Component} from 'react';
import HeroImg from "./IMG/pets.jpg";
import './HeroImage.css'




class HeroImage extends Component{
    render(){
        return(
            <Fragment>
                    <div  className="hero-image">
                        <img src={HeroImg} />
                        <div >
                            <span ><h1 className="testing">PET SUPPLIES</h1></span>
                            <p>Get What Your Pet Needs!</p>
                        </div>
                    </div>
                
            </Fragment>
        );
    }
}




export default HeroImage;