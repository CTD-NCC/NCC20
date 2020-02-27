import React ,{Component}from 'react';
import { connect } from "react-redux";

class Console extends Component {
    state = {  }
    render() {
    if(this.props.renderConsole===true)
    {
    return ( 
       
        <div 
         style={{
            marginTop:"2vh",
            borderRadius : "2vh", 
            width : "77vw",
            height:"25vh",
            marginLeft : ".5vw",
            
        }}> 
            <div className="console" >
              <h3 style={{textAlign:"center"}}>Console</h3>
              <div>{this.props.result}</div><br/>
              <div>{this.props.error}</div>
            </div>
        </div>
     );
    }
     return null;
}
}
const mapStateToProps = state => {
    return {
        error : state.coding.error,
        result : state.coding.result,
    }
}


export default connect(mapStateToProps)(Console);