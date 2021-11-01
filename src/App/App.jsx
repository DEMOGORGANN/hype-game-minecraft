import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route
} from "react-router-dom";

import NavBar from "./../NavBar/NavBar"
import HomePage from "../HomePage/HomePage";
import Modal from "../ModalWindow/Modal";
import Server from '../ServerPage/Server'


import styles from './App.module.css'
import Footer from "../Footer/Footer";

function App() {

  const [kolUser] = useState(Math.round(Math.random() * 10000))
  const [visible, setVisible] = useState(false)


  useEffect(() => {
    document.querySelector("body").style.overflow = visible ? "hidden" : "auto";
  }, [visible])
  return (

    <BrowserRouter>
      <div className={styles.App}  >
        <Modal visible={visible} setVisible={setVisible} />
        <NavBar kolUser={kolUser} setVisible={setVisible} />

        <Route exact path="/">
          <HomePage kolUser={kolUser} setVisible={setVisible} />
        </Route>
        <Route exact path="/servers">
          <Server />
        </Route>





        <Footer />


      </div>
    </BrowserRouter>
  );
}

export default App;
