import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component {
    navbarStyle = {
        backgroundColor: "bisque",
        padding: "10px 0"
    };

    liStyle = {
        padding: "0 10px",
    };

    ulStyle = {
        listStyleType: "none", 
        display: "flex",
    }
    render() {
        return (
            <div style={this.navbarStyle}>
                <ul style={this.ulStyle}>
                    <li style={this.liStyle}><Link to="/">Main page</Link></li>
                    <li><Link style={this.liStyle} to="/userPage">User page</Link></li>
                    <li><Link style={this.liStyle} to="/addPhoto">Add photo</Link></li>
                    <li><Link style={this.liStyle} to="/login">Login</Link></li>
                    <li><Link style={this.liStyle} to="/signUp">SignUp</Link></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;