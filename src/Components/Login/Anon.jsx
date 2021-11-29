import React, { Component } from 'react';



class Anon extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            anon : true
         }
    }
    render() { 
        return ( 
            <>
                <div className="bod-bg-img">
                    <div className="row">
                        <div className="col-4">
                        </div>
                            <div className="col-4">
                                <h1 className="anon-text">Welcome to our Shop! Register Now!</h1>
                            </div>
                        <div className="col-4">

                        </div>
                   </div>
                </div>
            </>
         );
    }
}
 
export default Anon