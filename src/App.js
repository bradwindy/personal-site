import React from 'react';
import './App.css';
import Root from "./components/Root"
import Home from "./components/Home"
import NoMatch from "./components/NoMatch";
import {BrowserRouter, Switch, Route} from "react-router-dom";


function App() {
  return (
      // this is the browser router, and it displays a different react component depending on where the user
      // is within the web page.
      <BrowserRouter>
        <Root>
          <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route component={NoMatch}/>
          </Switch>
        </Root>
      </BrowserRouter>

  );
}

export default App;
