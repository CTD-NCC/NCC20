import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom";

class EmergencyLogin extends Component {
    state = { 
        username : "",
        password : "",
        superuserPasswword : ""
     }

     handleSubmit = () =>{
         const username = this.state.username;
         const password = this.state.password;
         const superuserPassword = this.state.superuserPassword;
        axios
        .post("http://"+`${this.props.url}`+"/emergency/", {'Username': username,'password' : password,
    'superuser':superuserPassword})

    .then(response => {
            //console.log(response);
            localStorage.setItem('Username',this.state.username);
            this.props.changeUsername(this.state.username);
            <Redirect push to="/question" />
        })  
     }

     render() { 
        return (  
            <React-Fragment>
            <label for="fname">Username:</label>
            <input type="text" value={this.state.username}/><br/><br/>
            <label for="lname">Password:</label>
            <input type="password" value={this.state.password}/><br/><br/>
            <label for="lname">Superuser Password:</label>
            <input type="password" value={this.state.superuserPassword}/><br/><br/>
            <input type="submit" value="Submit" onClick={this.handleSubmit}/>  
            </React-Fragment>
            
        );
    }
}
 
const mapStateToProps = state => {
    return {
        url : state.Url.url,
        username: state.root.userName,
       
    }
}

const mapDispatchToProps = dispatch =>{
    return{
    changeUsername: userName => {
        dispatch({
            type: "CHANGE_USERNAME",
            username: userName
        })
    }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EmergencyLogin);