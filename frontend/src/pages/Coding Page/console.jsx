import React from 'react';

const Console =(props) => {
      
    
    if(props.render===true)
    return ( 
        
        <div 
         style={{
            marginTop:"2vh",
            borderRadius : "2vh", 
            width : "77vw",
            height:"25vh",
            marginLeft : ".5vw",
            
        }}>
            <textarea className="console" readOnly>
              Console
            </textarea>
        </div>
     );
     return null;
}


export default Console;