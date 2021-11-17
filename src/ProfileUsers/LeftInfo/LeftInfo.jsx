import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from './LeftInfo.module.css';

import ModalWAddBalance from './../ModalWAddBalance/ModalWAddBalance'

import avatarUser from './../../IMG/avatarUser.png'
import Group18 from './../../IMG/Group18.svg'


function LeftInfo({ setAuth, authUserT }) {

    const [visibleModBuy, setVisibleModBuy] = useState(false)

    return (
        <div>
            <div className={styles.leftInfo}>
                <img src={avatarUser} alt="" className={styles.avatar} />
                <div className={styles.balans}>
                    <h3>Баланс</h3>
                    <h2>₽{authUserT.money}</h2>
                </div>
                <div className={styles.Donate}>
                    {authUserT.donate === "НЕТ ПРИВЕЛЕГИИ" ? <img src={Group18} alt="" /> : null}
                    <div className={styles.goodDon}>
                        <span>{authUserT.donate}</span>
                        <span>{authUserT.dateDonate}</span>
                    </div>
                </div>
                {authUserT.donate === "НЕТ ПРИВЕЛЕГИИ" ? <NavLink exact to="/donate">Преобрести привелегию</NavLink> : null}
                <button onClick={() => setVisibleModBuy(true)}>
                    <span>+</span>
                    <span >Пополнить баланс</span>
                </button>
                <button className={styles.exitAccount} onClick={() => setAuth(false)}>выйти</button>

            </div>
            <ModalWAddBalance
                visibleModBuy={visibleModBuy}
                setVisibleModBuy={setVisibleModBuy}
            />
        </div>

    );
}

export default LeftInfo;
