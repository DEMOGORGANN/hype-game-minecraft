import React from "react";
import { useState } from "react/cjs/react.development";


import styles from './ShopDonate.module.css'


import warrior3 from './../IMG/warrior3.png'

function ShopDonate() {


    const [activeBut, setActiveBut] = useState("Survival")


    return (
        <div className={styles.wrapShop}>
            <div className={styles.wrapBut}>
                <button
                    className={activeBut === "Survival" ? styles.activeBut : 0}
                    onClick={() => setActiveBut("Survival")}>
                    выживание
                </button>
                <button
                    className={activeBut === "Grief" ? styles.activeBut : 0}
                    onClick={() => setActiveBut("Grief")}>
                    гриферский
                </button>
                <button
                    className={activeBut === "PvPArea" ? styles.activeBut : 0}
                    onClick={() => setActiveBut("PvPArea")}>
                    pvp арена
                </button>
                <button
                    className={activeBut === "NewServ" ? styles.activeBut : 0}
                    onClick={() => setActiveBut("NewServ")}>
                    новый сервер
                </button>
            </div>
            <div className={styles.wrapDonateBlock}>
                <div className={styles.infoDonate}>
                    <span>ВОИН</span>
                    <span>ОТ ₽199</span>
                </div>
                <div>
                    <img src={warrior3} alt="" />
                </div>
            </div>
            <div className={styles.wrapDonateBlock}>
                <div className={styles.infoDonate}>
                    <span>ВОИН</span>
                    <span>ОТ ₽199</span>
                </div>
                <div>
                    <img src={warrior3} alt="" />
                </div>
            </div>
            <div className={styles.wrapDonateBlock}>
                <div className={styles.infoDonate}>
                    <span>ВОИН</span>
                    <span>ОТ ₽199</span>
                </div>
                <div>
                    <img src={warrior3} alt="" />
                </div>
            </div>
            <div className={styles.wrapDonateBlock}>
                <div className={styles.infoDonate}>
                    <span>ВОИН</span>
                    <span>ОТ ₽199</span>
                </div>
                <div>
                    <img src={warrior3} alt="" />
                </div>
            </div>
            

        </div>
    );
}

export default ShopDonate;
