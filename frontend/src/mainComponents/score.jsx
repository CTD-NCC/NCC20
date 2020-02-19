import React, {Component} from 'react';
import "./navBar.css";
import { connect } from "react-redux";

class Score extends Component {
    
    render() { 
         
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
                <span >{this.props.total}</span>
            </div>
        </div>
    );
}
}
const mapStateToProps = state => {
    return  {
      total : state.testcases.total
    };
  }
export default connect(mapStateToProps)(Score);