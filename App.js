import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Mynavigation from './component/Mynavigation';
import Myroute from './component/Myroute';
import {BrowserRouter} from "react-router-dom";

//import theImage from './masrafi2.jpg'


function App() {
  return (
    <div>

<span style={{marginLeft:"100px"}}>

<BrowserRouter>
<Mynavigation></Mynavigation>
<Myroute></Myroute>
</BrowserRouter>

</span>



 
     

      
    </div>
  );
}

export default App;
