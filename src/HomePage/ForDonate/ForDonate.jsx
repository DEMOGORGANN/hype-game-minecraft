import React from "react";
import { NavLink } from "react-router-dom";




import donateImgHomePage from './../../IMG/donateImgHomePage.png'
import PersMIn from './../../IMG/PersMIn.png'
import Market from './../../IMG/Market.png'

import styles from './ForDonate.module.css'


export default function ForDonate() {
    return (
        <div className={styles.wrapDonate}>
            <div className={styles.infoDonateHomePage}>
                <h2>У нас отсутствуют большие преимущества от доната</h2>

                <div className={styles.wrapInfoDonate}>
                    <div className={styles.WrapFirstEl}>
                        <div className={styles.wrapInfoAdmin}>
                            <span>Админ</span>
                            <span>от ₽399</span>
                        </div>
                        <img src={PersMIn} alt="" />
                    </div>

                    <div className={styles.WrapLastEl}>
                        <img src={Market} alt="" />

                        <div className={styles.wrapLinkMarketAndArrow}>
                            <NavLink exact to='/maskGro' >Перейти в магазин<br /> к привелегиям</NavLink>
                            <div className={styles.arrow}>
                                <div></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <img src={donateImgHomePage} alt="" />

        </div>
    )
}