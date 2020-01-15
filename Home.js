import React, { Component } from 'react';
import theImage from './masrafi2.jpg';
import theImage1 from './mas.jpg';

class Home extends Component {
    render() {
        return (
            <span>
                
                <div style={{height:"650px",width:"300px",backgroundColor:"#FCF3CF",float:"left",display:"relative",marginBottom:"50px"}}>
         <img src={theImage} className="img"alt="MyImage"/>
         <h2 style={{marginLeft:"70px"}}>Masrafi Anam</h2>
        <h5 style={{marginLeft:"10px"}}>Southeast University Department of CSE</h5>
        <h3 style={{fontStyle:"oblique",fontWeight:"bold"}}>Al right, this profile is made by me. </h3>

        
        <p style={{fontSize:"25px",marginLeft:"80px",marginTop:"190px"}}>FOLLOW ME</p>
        <a style={{marginLeft:"20px"}} href="https://www.facebook.com/mdmasrafi.anam"target="_blank" rel="noopener noreferrer">Facebook</a>
        <a style={{marginLeft:"8px"}} href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">Youtube</a>
        <a style={{marginLeft:"8px"}} href="https://twitter.com/MasrafiAnam"target="_blank"rel="noopener noreferrer">Twiter</a>
        <a style={{marginLeft:"8px"}} href="https://www.linkedin.com/feed/"target="_blank"rel="noopener noreferrer">LinkDin</a>
</div>

<p style={{display:"relative",float:"left",marginLeft:"250px",marginTop:"250px",fontSize:"50px"}}>I am a<br></br> Software Engineer</p>

<img src={theImage1} className="img1" alt="MyImage"/>
                
                
            </span>
        );
    }
}

export default Home;