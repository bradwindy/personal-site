import React from 'react';
import './App.css';
import Root from "./components/Root"
import Home from "./components/Home"
import Projects from "./components/Projects"
import NoMatch from "./components/NoMatch";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {
    faCheckSquare,
    faCoffee,
    faDesktop,
    faMobileAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(
    fab,
    faCheckSquare,
    faCoffee,
    faDesktop,
    faMobileAlt
);


function App() {
  return (
      // this is the browser router, and it displays a different react component depending on where the user
      // is within the web page.
      <BrowserRouter>
        <Root>
          <Switch>
            <Route exact path={"/"} component={Home}/>
              <Route exact path={"/projects"} component={Projects}/>
            <Route component={NoMatch}/>
          </Switch>
        </Root>
      </BrowserRouter>

  );
}

export default App;
