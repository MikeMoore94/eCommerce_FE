import React, {Fragment, Component} from 'react';
import HeroImg from "./IMG/pets.jpg";




class HeroImage extends Component{
    render(){
        return(  
                      
            <Fragment>
                    <div class="hero-image">
                        <img src={HeroImg} />
                        <div class="hero-text">
                            <h1>PET SUPPLIES</h1>
                            <p>Get What Your Pet Needs!</p>
                        </div>
                    </div>
                
            </Fragment>
            
        );
    }
}




export default HeroImage;