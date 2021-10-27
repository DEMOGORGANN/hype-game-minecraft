import React from "react";
import {
  BrowserRouter
} from "react-router-dom";

import NavBar from "./../NavBar/NavBar"

import styles from './App.module.css'

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <NavBar />
        хуй тебе в рот

      </div>
    </BrowserRouter>
  );
}

export default App;
