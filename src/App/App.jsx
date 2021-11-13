import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route
} from "react-router-dom";

import NavBar from "./../NavBar/NavBar"
import HomePage from "../HomePage/HomePage";
import Modal from "../ModalWindow/Modal";
import Server from '../ServerPage/Server'
import BanList from '../BanList/BanList'
import SupportTS from "../SupportTS/SupportTS";
import ShopDonate from "../ShopDonate/ShopDonate";
import NoAuthUser from "../NoAuthUser/NoAuthUser";


import styles from './App.module.css'
import Footer from "../Footer/Footer";

function App() {

  const [kolUser] = useState(Math.round(Math.random() * 10000))
  const [visible, setVisible] = useState(false)
  const [auth, setAuth] = useState(false)
  const [authUserT, setAuthUser] = useState({})



  useEffect(() => {
    document.querySelector("body").style.overflow = visible ? "hidden" : "auto";
  }, [visible])
  return (

    <BrowserRouter>
      <div className={styles.App}  >
        <Modal visible={visible} setVisible={setVisible} setAuth={setAuth} />
        <NavBar kolUser={kolUser} setVisible={setVisible} auth={auth} />

        <Route exact path="/">
          <HomePage kolUser={kolUser} setVisible={setVisible} />
        </Route>
        <Route exact path="/servers">
          <Server />
        </Route>
        <Route exact path="/banList">
          <BanList />
        </Route>
        <Route exact path="/ts">
          <SupportTS />
        </Route>
        <Route exact path="/donate">
          <ShopDonate auth={auth}/>
        </Route>

        {
          auth === false ?
            <Route exact path="/myOffice">
              <NoAuthUser setVisible={setVisible}/>
            </Route> :
            <Route exact path="/myOffice">
              ура <button onClick={() => setAuth(false)}>выйти</button>
            </Route>
        }



        <Footer />


      </div>
    </BrowserRouter>
  );
}

export default App;
