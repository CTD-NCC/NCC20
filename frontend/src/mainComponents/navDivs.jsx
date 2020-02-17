import React, {Component} from 'react';
import {Redirect} from 'react-router'

// export default function NavDivs(props) {
//     const {imgSrc, styling} = props;
//     let division;
//     if(imgSrc==='/ctd.png')
//         division = 'Credenz Tech Dayz';
//     else if(imgSrc==='/Question.png')
//         division='question';
//     else if(imgSrc==='/iconLeader.png')
//         division='Leaderboard';
//     else if(imgSrc==='/submissions.png')
//         division='Submissions';
//     else
//         division='Log Out';
    
//     if(imgSrc==='/ctd.png'){
//         return (
//             <div className='row' style={styling} onClick={() => this.handleClick}>
//                 <img src="/ctd.png" alt={`${division}`} style={{height:'15vh', width:'13vw'}} />
//             </div>
//         )
//     }
//     else{
//         return(
//             <div className='row links'>
//                 <img src={`${imgSrc}`} alt={`${division}`} style={styling}/>
//                 <span>{division}</span>
//             </div>
//         )
//     }
// }

class NavDivs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            redirect: false
        }
    }
    
    handleClick = () => {
        this.setState({
            redirect: true
        })
    }

    render() { 

    const {imgSrc, styling} = this.props;
    let division;
    if(imgSrc==='/ctd.png')
        division = 'Credenz Tech Dayz';
    else if(imgSrc==='/Question.png')
        division='question';
    else if(imgSrc==='/iconLeader.png')
        division='leaderboard';
    else if(imgSrc==='/submissions.png')
        division='submission';
    else
        division='result';
    
    if(imgSrc==='/ctd.png'){
        return (
            <div className='row' style={styling}>
                <img src="/ctd.png" alt={`${division}`} style={{height:'15vh', width:'13vw'}} />
            </div>
        )
    }
    else{
        if(this.state.redirect === true){
            this.setState({
                redirect: false
            })
            return <Redirect push to={`/${division}`} />
        }
        return(
            <div className='row links' onClick={() => this.handleClick()}>
                <img src={`${imgSrc}`} alt={`${division}`} style={styling}/>
                <span>{division}</span>
            </div>
        )
    }
    }
}
 
export default NavDivs;