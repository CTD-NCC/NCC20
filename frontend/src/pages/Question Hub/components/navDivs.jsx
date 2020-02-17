import React from 'react'

export default function NavDivs(props) {
    const {imgSrc, styling} = props;
    let division;
    if(imgSrc==='/ctd.png')
        division = 'Credenz Tech Dayz';
    else if(imgSrc==='/Question.png')
        division='Question Hub';
    else if(imgSrc==='/iconLeader.png')
        division='Leaderboard';
    else if(imgSrc==='/submissions.png')
        division='Submissions';
    else
        division='Log Out';
    
    if(imgSrc==='/ctd.png'){
        return (
            <div className='row' style={styling}>
                <img src="/ctd.png" alt={`${division}`} style={{height:'15vh', width:'13vw'}} />
            </div>
        )
    }
    else{
        return(
            <div className='row links'>
                <img src={`${imgSrc}`} alt={`${division}`} style={styling}/>
                <span>{division}</span>
            </div>
        )
    }
}
