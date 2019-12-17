import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Dashboard from "../Dashboard/Dashboard";

export class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Dashboard />
      </React.Fragment>
    );
  }
}

export default Layout;
