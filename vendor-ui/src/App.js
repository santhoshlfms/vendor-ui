import React from "react";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
import ModalMaster from "./components/ModalView/ModalMaster";

function App() {
  return (
    <React.Fragment>
      <Router>{routes}</Router>
      <ModalMaster />
    </React.Fragment>
  );
}

export default App;
