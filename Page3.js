import React, { Component } from 'react';
import theImage from './masrafi2.jpg'

class Page3 extends Component {
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
               

               <table style={{border:"1px solid black",borderCollapse:"collapse",marginLeft:"600px",marginTop:"200px"}}>
                   <tr>
                       <th style={{padding:"20px",position:"left",textAlign:"center",background:"#EBF5FB"}}>Permanant Addres:</th>
                       <td style={{padding:"5px",position:"left",textAlign:"left",padding:"30px",background:"#FDEDEC"}}>Basenterpara, Jumarbari,Shagata,Gaibandha</td>
                   </tr>
                   <tr>
                       <th style={{padding:"20px",position:"left",textAlign:"center",background:"#EBF5FB"}}>Present Address:</th>
                       <td style={{padding:"20px",position:"left",textAlign:"left",padding:"30px",background:"#FDEDEC"}}>Nikunjo-2, Khilkhet, Dhaka</td>
                   </tr>
                   <tr>
                       <th style={{padding:"20px",position:"left",textAlign:"center",background:"#EBF5FB"}}>Phone: </th>
                       <td style={{padding:"20px",position:"left",textAlign:"left",padding:"30px",background:"#FDEDEC"}}>01717374348</td>
                   </tr>
                   <tr>
                       <th style={{padding:"20px",position:"left",textAlign:"center",background:"#EBF5FB"}}>Email:</th>
                       <td style={{padding:"20px",position:"left",textAlign:"left",padding:"30px",background:"#FDEDEC"}}><a href="https://mail.google.com/mail/u/0/#inbox"target="_blank"rel="noopener noreferrer">masrafianam@gmail.com</a></td>
                   </tr>
               </table>
            </span>
        );
    }
}

export default Page3;