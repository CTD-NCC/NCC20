import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./navBar.css";
import NavDivs from './navDivs'

const Navbar = () => {
    return (
        <div className="col-sm-2 navbar" style={{display:'block'}}>
          <NavDivs imgSrc="/ctd.png" styling={{height:'18vh', display:'flex', justifyContent:'center', alignContent:'center'}}/>
          <div className='row timer' style={{height:'18vh'}}>
            {/* Isko Haath Mat Lagana */}
          </div>
          <NavDivs imgSrc="/Question.png" styling={{height:'4vh', width: '2vw', marginLeft:'0.5vw', marginRight:'1vw'}} />
          <NavDivs imgSrc="/iconLeader.png" styling={{height:'4vh', width: '2vw', marginLeft:'0.5vw', marginRight:'1vw'}} />
          <NavDivs imgSrc="/submissions.png" styling={{height:'4vh', width: '2vw', marginLeft:'0.8vw', marginRight:'0.7vw'}} />
          <NavDivs imgSrc="/logout.png" styling={{height:'4vh', width: '2vw', marginLeft:'0.5vw', marginRight:'1vw'}} />
          <div className="row pisblogo">
            <img src="/logopisb.png" alt="PISB Logo" style={{height:'6vh', marginLeft:'2.5vw'}}/>
          </div>
        </div>
      );
}

 
export default Navbar;
