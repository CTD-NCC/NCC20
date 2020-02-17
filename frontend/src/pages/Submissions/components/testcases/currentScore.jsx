import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./testcases.css";

const CurrentScore = () => {
    return (  
        <div >
            <div style={{
                        fontSize:"30px",
                        marginLeft:"20px",
                        color:"rgb(30,65,125)",
                        textShadow:"1px 1px 2px #000"
                        }}>
                SCORE
            </div>
            <div className="score">
                 100
            </div>
            <div  style={{
                marginTop:"6vh",
                marginLeft:"-4vw",
                fontSize:"20px",
                // boxShadow:"1px 1px 4px rgb(3,80,100)",
                borderRadius:"1vh",
                padding:"2vh",
                backgroundColor: "rgba(255, 255, 255, 0.452)",
                color:"rgb(20,60,40)",
                boxShadow: "inset 0 0 5px #0350b4"
            }}>
                1 out of 8 questions solved
            </div>
            <button className="btn retry"
                >
                Retry</button>
        </div>
    );
}
 
export default CurrentScore;