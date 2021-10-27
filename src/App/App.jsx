import React from "react";
import {
  BrowserRouter
} from "react-router-dom";

import NavBar from "./../NavBar/NavBar"
import HomePage from "../HomePage/HomePage";

import styles from './App.module.css'

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <NavBar />
        <HomePage />

      </div>
    </BrowserRouter>
  );
}

export default App;
