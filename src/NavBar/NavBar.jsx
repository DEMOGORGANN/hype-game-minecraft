import React from "react";

import logo from './../IMG/HypeGameLOGO.png'
import HomeImg from "./../IMG/Home.png"
import Server from './../IMG/Servers.png'
import BanList from './../IMG/BanList.png'
import Support from './../IMG/Support.png'
import MaskGroup from './../IMG/MaskGroup.png'


import styles from "./NavBar.module.css"

function wrapNavBar() {
    return (
        <div className={styles.wrapNAV}>

            <a href='#'>
                <img className={styles.logo} src={logo} alt="" />
            </a>

            <a href='#'>
                <img src={HomeImg} alt="" />
                <span>ГЛАВНАЯ</span>
            </a>

            <a href='#'>
                <img src={Server} alt="" />
                <span>СЕРВЕРА</span>
            </a>

            <a href='#'>
                <img src={BanList} alt="" />
                <span>БАН ЛИСТ</span>
            </a>

            <a href='#'>
                <img src={Support} alt="" />
                <span>ТЕХ.ПОДДЕРЖКА</span>
            </a>

            <a href='#'>
                <img src={MaskGroup} alt="" />
                <span>МАГАЗИН</span>
            </a>

            <a href='#' className={styles.onlineServ}>
                <div className={styles.circle1}>
                    <div className={styles.circle2}></div>
                </div>
                <span>4302</span>
            </a>

            <a href='#' className={styles.MyOffice}>
                ЛИЧНЫЙ КАБИНЕТ
            </a>
        </div>
    );
}

export default wrapNavBar;
