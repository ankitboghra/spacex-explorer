import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import createStore from './store';
import Histories from './components/Histories/Histories';
import Payloads from './components/Payloads/Payloads';

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Histories />
        <Payloads />
      </div>
    </Provider>
  );
}

export default App;
