import React ,{Component}from 'react';
import "./navBar.css";

class Timer extends Component {
    state = { 
        seconds:"00",
        minutes:"00",
        hours:"03",
        h1:"7.8vh",
        h2:"7.8vh",
        h3:"7.8vh"
     }

    startTimer=(duration) =>{
        var timer = duration,hrs, minutes, seconds,h1="7.8",h2="7.8",h3="7.8";
        setInterval(this.timerFunc=()=>{
            hrs = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600)/60, 10);
        seconds = parseInt((timer % 3600)%60,10);

        hrs = "0" + hrs;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
         
        this.setState({seconds,minutes,hours:hrs});

        this.setState({h1:h1+"vh",h2:h2+"vh",h3:h3+"vh"});
        //seconds logic
        h1=parseFloat(h1,10);
        h1=h1-(.13);
        if(h1<=.13)
        h1=7.8;
        h1=h1.toString(10);

        //minutes logic
        h2=parseFloat(h2,10);
        h2=h2-(.0021);
        if(h2<=0.0021)
        h2=7.8;
        h2=h2.toString(10);
        
        //hours logic
        h3=parseFloat(h3,10);
        h3=h3-(.0007222);
        if(h3<=.0007222)
        h3=7.8;
        h3=h3.toString(10);

        if (--timer < 0) {
            timer = duration;
        }  
        }, 1000);
    }
    
    componentDidMount(){
        let hrs = 60*60*3;
            
        this.startTimer(hrs);
    };

    render() {
        return(
    
        <div className="col-sm-12" >
            <div className="row time" >
        <div className="circular" >
        <div id="insideHr" style={{borderLeft:"4.5vw solid rgb(10,45,105)",height:this.state.h3}}>
            </div>
    <span id="hr">{this.state.hours}</span>
        </div>
        <div className="colon">:</div>
        <div className="circular">
        <div id="insideMin" style={{borderLeft:"4.5vw solid rgb(10,45,105)",height:this.state.h2}}>
            </div>
        <span id="min">{this.state.minutes}</span>
        </div>
        <div className="colon">:</div>
        <div  className="circular">
            <div id="insideSec" style={{borderLeft:"4.5vw solid rgb(10,45,105)",height:this.state.h1}}>
            </div>
            <span id="sec">{this.state.seconds}</span>
        </div>
        </div>
        </div>
    );
}
}
export default Timer;