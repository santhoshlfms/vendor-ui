import React from 'react';
import './App.css';

import { BrowserRouter as Router } from "react-router-dom";
import routes from './routes';


function App() {
  return (
    <Router >
    <div className="App">
      <div className="content">
        {routes}
      </div>
    </div>
  </Router>
  );
}

export default App;
