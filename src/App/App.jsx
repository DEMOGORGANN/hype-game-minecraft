import React, { useState } from "react";
import {
  BrowserRouter
} from "react-router-dom";

import NavBar from "./../NavBar/NavBar"
import HomePage from "../HomePage/HomePage";

import styles from './App.module.css'

function App() {

  const [kolUser] = useState(Math.round(Math.random() * 10000))

  return (
    <BrowserRouter>
      <div className={styles.App}>
        <NavBar kolUser={kolUser} />
        <HomePage kolUser={kolUser} />

      </div>
    </BrowserRouter>
  );
}

export default App;
