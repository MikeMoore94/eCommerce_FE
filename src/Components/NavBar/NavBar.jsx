import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
   
    render() {
        return (
          <React.Fragment>
              <nav className="navBar">
                    <a className="navBar-brand" >
                        <h1>Shopping Cart <span className="badge">{this.props.ShoppingCart}</span></h1>
                    </a>
                </nav>
          </React.Fragment>
        );
    }
}


export default NavBar;