import React, { Component } from 'react';
import theImage from './masrafi2.jpg'

class Page1 extends Component {
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
<p style={{marginLeft:"500px"}}>
<h2 class="mas">Skills</h2>
<b>i.  Language Programming:</b>
<ul>
<li>C</li>
<li>C++</li>
<li>Java</li>
<li>HTML</li>
<li>CSS</li>
<li>Java Script</li>
<li>React.js</li>
<li>PHP</li>
<li>Graphics Design</li>
<li>Android</li>
<li>Mysql</li>
<li>XAMP</li>
<li>Software Designing</li>
<li>Photoshop CS6</li>
</ul>
<p>
<b>ii.	Computer/Laboratory Instrumental Operation skill:</b>
<ul>
<li>MS Office Suite (Word, Excel, PowerPoint)</li>
<li>Internet Browsing & E-mail Corrosp0ndence </li>
</ul>





</p>
<p>
<b>iii.	Language and communication skill:</b>
<ul>
<li>Excellent written and oral communicating ability in Bengali and English</li>
</ul>
</p>
</p>

            </span>
        );
    }
}

export default Page1;