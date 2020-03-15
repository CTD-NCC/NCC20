import React from 'react';

export default function Value(props){
    return (
        <div className="Value">
            <div id='colorKey' style={{backgroundColor:`${props.color}`}}></div>
            <div id='colorText'>{props.text}</div>
        </div>
    )
}