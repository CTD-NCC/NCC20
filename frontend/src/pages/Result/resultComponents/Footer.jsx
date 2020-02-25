import React from 'react';
import "./footer.css";

const Footer = () => {
    return (  
        <div className="row footer"style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            height:"7vh"
            }}>
        &copy; PICT IEEE Student Branch
        </div>
    );
}
 
export default Footer;