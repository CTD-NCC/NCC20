import React from 'react'

export default function DisplayText(props) {
    if(props.border==="true")
        return (
            <div className="DisplayText" style={{border:'3px solid darkblue', borderRadius:'10px', paddingTop: "7px", backgroundColor:'whitesmoke'}}>
                {props.text}
            </div>
        )
    else
        return (
            <div className="DisplayText" style={{paddingTop: "2vh"}}>
                {props.text}
            </div>
        )
}