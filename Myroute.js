import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Home from "./pages/Home";
import About from "./pages/About"
//import NotFound from "./pages/NotFound";

class Myroute extends Component {
    render() {
        return (
            <span>
                
                <Route exact path="/" component={Home}/>
                <Route exact path="/About" component={About}/>
                <Route exact path="/page1" component={Page1}/>
                <Route exact path="/page2" component={Page2}/>
                <Route exact path="/page3" component={Page3}/>
                
                
            </span>
        );
    }
}

export default Myroute;