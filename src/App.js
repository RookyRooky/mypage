import React from 'react';
import Home from './Home';
import PageNotfound from './404';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {


  
  

    return (
     
      <Router>
     
     <Switch>
          <Route exact path='/' component={Home} />
         
         
         <Route component={PageNotfound}/>
         
     </Switch>
  
  </Router>
    );
  
}


export default App;
