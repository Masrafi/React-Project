import React, { Component } from 'react';
//import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";

class Mynavigation extends Component {
    render() {
        return (
            <span style={{float:"right",marginRight:"100px"}}>
                <ul>
                    <NavLink exact style={{marginLeft:"300px"}} activeStyle={{color:"red"}} to="/">HOME</NavLink>
                    <NavLink style={{marginLeft:"100px"}} exact activeStyle={{color:"red"}} to="/About">ABOUT</NavLink>
                    <NavLink style={{marginLeft:"100px"}} exact activeStyle={{color:"red"}} to="/page1">SKILLS</NavLink>
                    <NavLink style={{marginLeft:"100px"}} exact activeStyle={{color:"red"}} to="/page2">EDUCATION</NavLink>
                    <NavLink style={{marginLeft:"100px"}} exact activeStyle={{color:"red"}} to="/page3">CONTACT</NavLink>
                
                </ul>
            </span>
        );
    }
}

export default Mynavigation;