import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import createStore from './store';
import Header from "./components/Header/Header";
import Histories from './components/Histories/Histories';
import Payloads from './components/Payloads/Payloads';

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/histories">
              <Histories />
            </Route>
            <Route path="/payloads">
              <Payloads />
            </Route>
            <Route path="/">
              <Histories />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>

  );
}

export default App;
