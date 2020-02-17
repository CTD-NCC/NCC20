import React from 'react';
import "./navBar.css";

const Score = () => {
    return (  
        <div className="col-sm-9" >
            <div className="row sc" style={{
                                            height:"6vh",
                                            display:'flex', 
                                            justifyContent:'space-around',
                                             alignContent:'center',
                                            //  color:"white",
                                             fontSize:"2.5vh",
                                             }}>
                SCORE :
                <span >100</span>
            </div>
        </div>
    );
}
 
export default Score;