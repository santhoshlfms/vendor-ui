import React from 'react';
import { Link, Route, useParams, Switch } from "react-router-dom";
import Search from '../Search/Search'
 

class Dashboard extends React.Component {

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
       <div>
         <div>Dashboard</div>
         <Link  to="/search" >Search</Link>
        

          <div>
          
          </div>
        
       </div>

      
       );
    }
  }


  
  export default Dashboard;