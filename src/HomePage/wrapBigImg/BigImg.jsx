import React from "react";


import pickMinecraft from './../../IMG/pickMinecraft.png'
import imgMincrf from './../../IMG/imgMincrf.png'
import koob1 from './../../IMG/koob1.png'
import koob2 from './../../IMG/koob2.png'
import koob3 from './../../IMG/kuub3.png'

import styles from './BigImg.module.css'
import { NavLink } from "react-router-dom";


export default function BigImg({ setVisible, auth }) {
    return (
        <div className={styles.wrapd}>
            <h2 className={styles.TITLETILE}>Начни увлекательное выживание<br /> на наших серверах!</h2>
            <div className={styles.but}>
                {auth === true
                    ?
                    <NavLink to="myOffice">
                        <img src={pickMinecraft} alt="" />
                        <span>НАЧАТЬ ИГРАТЬ</span>
                    </NavLink>
                    :
                    <NavLink to="myOffice" onClick={() => setVisible(true)}>
                        <img src={pickMinecraft} alt="" />
                        <span>НАЧАТЬ ИГРАТЬ</span>
                    </NavLink>
                }
            </div>
            <div className={styles.bigImg}>
                <img src={imgMincrf} alt="" />
                <div className={styles.wrapKoob}>
                    <img src={koob1} alt="" className={styles.koob1} />
                    <img src={koob2} alt="" className={styles.koob2} />
                    <img src={koob3} alt="" className={styles.koob3} />
                </div>
            </div>

        </div>
    )
}