import React, { Component } from 'react';

const Title = (props) => {
    return (  
        <div className="row"style={{
            color:"rgb(30,65,125)",
            textShadow:"1px 1px 2px #000",
            height:"7vh",
            fontSize:"4vh",
            // boxShadow:"inset 0 -5px 5px -5px rgb(30,65,105)"
        }}>
           <u> {props.title}</u>
        </div>
    );
}
 
export default Title;