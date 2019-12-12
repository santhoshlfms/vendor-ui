import React from 'react';
import ReactDOM from "react-dom";


class Authentication extends React.Component {

    constructor(props) {
        super(props);
          
        // We declare the state as shown below
        
        this.state = {                           
          x: "This is x from state",    
          y: "This is y from state"
        }
      }

    // this is the html render 
    render(){
      return (
       <div>Login</div>
      );
    }
  }
  
  export default Authentication;