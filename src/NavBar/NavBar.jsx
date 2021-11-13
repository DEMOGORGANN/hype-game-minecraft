import React from "react";
import {
    NavLink
} from "react-router-dom";


import logo from './../IMG/HypeGameLOGO.png'
import HomeImg from "./../IMG/Home.png"
import Server from './../IMG/Servers.png'
import BanList from './../IMG/BanList.png'
import Support from './../IMG/Support.png'
import MaskGroup from './../IMG/MaskGroup.png'


import styles from "./NavBar.module.css"

function wrapNavBar({ kolUser, setVisible, auth }) {
    return (
        <div className={styles.wrapNAV}>

            <NavLink exact to='/'>
                <img className={styles.logo} src={logo} alt="" />
            </NavLink>

            <NavLink activeClassName={styles.active} exact to='/'>
                <img src={HomeImg} alt="" />
                <span>ГЛАВНАЯ</span>
            </NavLink>

            <NavLink activeClassName={styles.active} exact to='/servers'>
                <img src={Server} alt="" />
                <span>СЕРВЕРА</span>
            </NavLink>

            <NavLink activeClassName={styles.active} exact to='/banList'>
                <img src={BanList} alt="" />
                <span>БАН ЛИСТ</span>
            </NavLink>

            <NavLink activeClassName={styles.active} exact to='/ts'>
                <img src={Support} alt="" />
                <span>ТЕХ.ПОДДЕРЖКА</span>
            </NavLink>

            <NavLink activeClassName={styles.active} exact to='/donate'>
                <img src={MaskGroup} alt="" />
                <span>МАГАЗИН</span>
            </NavLink>

            <NavLink exact to='/servers' className={styles.onlineServ}>
                <div className={styles.circle1}>
                    <div className={styles.circle2}></div>
                </div>
                <span>{kolUser}</span>
            </NavLink>

            {auth === false ?
                <NavLink exact to='/myOffice' className={styles.MyOffice} onClick={() => setVisible(true)}>
                    ЛИЧНЫЙ КАБИНЕТ
                </NavLink> :
                <NavLink exact to="/myOffice" className={styles.MyOffice}>
                    Личный кабинет
                </NavLink>}
        </div >
    );
}

export default wrapNavBar;
