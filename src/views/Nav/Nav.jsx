import React from "react";
import "./Nav.scss"
import {Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
    render() {
        
        return(
            
            <div className="topnav">
                {/* <NavLink to="/" activeClassName="active">
 Home
</NavLink>
                <NavLink to="/product" activeClassName="active">
 Product
</NavLink> */}
                <a className="active" href="/">Home</a>
                <a href="/product">Product</a> 

            </div>
        )
    }

}
export default Nav;