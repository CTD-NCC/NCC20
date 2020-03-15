import React, {Component} from 'react';
import "./navBar.css";
import { connect } from "react-redux";
import axios from "axios";

class Score extends Component {
    
  componentDidMount(){
    axios.get("http://"+`${this.props.url}`+"/score/").then(response => {
      this.props.updateTotal(response.data.total);
    });
  }
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

const mapDispatchToProps = dispatch => {
  return {
    updateTotal: total => {
      dispatch({ type: "UPDATE_TOTAL", total: total });
  }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Score);