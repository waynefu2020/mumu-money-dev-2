import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Layout from './components/Layout';
import Tags from './views/Tags';
import Money from './views/Money';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';
import {Tag} from './components/Tag';
import {Setting} from './views/Money/Setting';


function App() {
  return (
      <Router>
              <Switch>
                  <Route exact path="/tags/:id">
                      <Tag />
                  </Route>
                  <Route exact  path="/tags">
                      <Tags />
                  </Route>
                  <Route exact path="/money">
                      <Money />
                  </Route>
                  <Route exact path="/setting">
                      <Setting />
                  </Route>
                  <Route exact path="/statistics">
                      <Statistics />
                  </Route>
                  <Redirect exact from="/" to="/money"/>
                  <Route path="*">
                      <NoMatch />
                  </Route>
              </Switch>
      </Router>
  );
}


export default App;
