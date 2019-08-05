import React from 'react';
import _ from "lodash";
import store from "../store";

import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

import './App.css';


function App() {
  let { contacts } = store.getState();
  return (
  <div className="App">
    <Sidebar contacts={_.values(contacts)}/>
    <Main />
  </div>
  );
}

export default App;
