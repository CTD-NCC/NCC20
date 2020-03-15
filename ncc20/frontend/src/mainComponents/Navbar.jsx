import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./navBar.css";
import Score from "./score";
import NavDivs from "./navDivs";
import Timer from "./timer";

// const Navbar = () => {
//     return (
//       <div className="col-sm-2 navbar" style={{display:'block'}}>
//         <NavDivs imgSrc="/ctd.png" styling={{height:'18vh', display:'flex', justifyContent:'center', alignContent:'center'}}/>
//         <div className='row timer' style={{height:'18vh'}}>
//           <Timer />
//         </div>
//         <NavDivs imgSrc="/Question.png" styling={{height:'4vh', width: '2vw', marginLeft:'0.5vw', marginRight:'1vw'}} />
//         <NavDivs imgSrc="/iconLeader.png" styling={{height:'4vh', width: '2vw', marginLeft:'0.5vw', marginRight:'1vw'}} />
//         <NavDivs imgSrc="/submissions.png" styling={{height:'4vh', width: '2vw', marginLeft:'0.8vw', marginRight:'0.7vw'}} />
//         <NavDivs imgSrc="/logout.png" styling={{height:'4vh', width: '2vw', marginLeft:'0.5vw', marginRight:'1vw'}} />
//         <div className="row pisblogo">
//           <img src="/logopisb.png" alt="PISB Logo" style={{height:'6vh', marginLeft:'2.5vw'}}/>
//         </div>
//       </div>
//     );
// }

// export default Navbar;

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classSub: "",
      classQue: "selected",
      classLeader: "",
      classLog: ""
    };
  }

  changeColor = d => {
    if (d === "question") {
      this.setState({
        classQue: "selected",
        classSub: "",
        classLeader: "",
        classLog: ""
      });
    } else if (d === "leaderboard") {
      this.setState({
        classLeader: "selected",
        classQue: "",
        classSub: "",
        classLog: ""
      });
    } else if (d === "submission") {
      this.setState({
        classSub: "selected",
        classQue: "",
        classLeader: "",
        classLog: ""
      });
    } else {
      this.setState({
        classLog: "",
        classQue: "",
        classLeader: "",
        classSub: ""
      });
    }
  };

  render() {
    return (
      <div className="col-sm-2 navbar" style={{ display: "block" }}>
        <NavDivs
          imgSrc="/ctd.png"
          styling={{
            height: "18vh",
            display: "flex",
            justifyContent: "center",
            alignContent: "center"
          }}
        />
        <div className="row timer" style={{ height: "10vh", marginTop: "2vh" }}>
          <Timer />
        </div>
        <div
          className="row"
          style={{
            height: "15vh",
            display: "flex",
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <Score />
        </div>

        <NavDivs
          imgSrc="/Question.png"
          styling={{
            height: "4vh",
            width: "2vw",
            marginLeft: "0.5vw",
            marginRight: "1vw"
          }}
          changeColor={this.changeColor}
          option={this.state.classQue}
        />
        <NavDivs
          imgSrc="/iconLeader.png"
          styling={{
            height: "4vh",
            width: "2vw",
            marginLeft: "0.5vw",
            marginRight: "1vw"
          }}
          changeColor={this.changeColor}
          option={this.state.classLeader}
        />
        <NavDivs
          imgSrc="/submissions.png"
          styling={{
            height: "4vh",
            width: "2vw",
            marginLeft: "0.8vw",
            marginRight: "0.7vw"
          }}
          changeColor={this.changeColor}
          option={this.state.classSub}
        />
        <NavDivs
          imgSrc="/logout.png"
          styling={{
            height: "4vh",
            width: "2vw",
            marginLeft: "0.5vw",
            marginRight: "1vw"
          }}
          changeColor={this.changeColor}
          option={this.state.classLog}
        />
        <div className="row pisblogo">
          <img
            src="/logopisb.png"
            alt="PISB Logo"
            style={{ height: "6vh", marginLeft: "2.5vw" }}
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
