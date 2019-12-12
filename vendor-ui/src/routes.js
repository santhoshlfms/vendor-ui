import React from 'react';
import {
  Route
} from 'react-router-dom';

//import serverUrl from './config'

import Dashboard from './components/Dashboard/Dashboard'
import Authentication from './components/Authentication/Authentication'

const routes = (<>
  <Route exact path="/" component={Authentication} />
  <Route exact path="/dashboard" component={Dashboard} />
</>
)
export default routes