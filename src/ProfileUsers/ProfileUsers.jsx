import React, { useState, useEffect } from "react";
import styles from './ProfileUsers.module.css'

import LeftInfo from './LeftInfo/LeftInfo'
import MainInfo from "./MainInfo/MainInfo";
import Promocode from "./Promocode/Promocode";


import Group52 from './../IMG/Group52.png'
import Group53 from './../IMG/Group53.png'
function ProfileUsers({ setAuth, authUserT, setAuthUser }) {

    const [activButtn, setActivButts] = useState('MainInf')
    const [noInput, setNoInput] = useState("")
    const [goodInput, setGoodInput] = useState("")


    useEffect(() => {
        setNoInput("")
        setGoodInput("")
    }, [activButtn]);

    return (
        <div>
            <div className={styles.WrapProfileUsers}>

                <LeftInfo setAuth={setAuth} authUserT={authUserT} />


                <div className={styles.rigtInfo}>
                    <div className={styles.wrapBut}>
                        <button
                            className={activButtn === "MainInf" ? styles.activButns : 0}
                            onClick={() => setActivButts("MainInf")}>
                            ОСНОВНАЯ ИНФОРМАЦИЯ
                        </button>
                        <button
                            className={activButtn === "Promocode" ? styles.activButns : 0}
                            onClick={() => setActivButts("Promocode")}>
                            промокоды
                        </button>
                        <button
                            className={activButtn === "Tranctishion" ? styles.activButns : 0}
                            onClick={() => setActivButts("Tranctishion")}>
                            ТРАНЗАКЦИИ
                        </button>
                    </div>
                    {activButtn === "MainInf" ? <MainInfo /> : null}
                    {activButtn === "Promocode" ?
                        <Promocode
                            noInput={noInput}
                            setNoInput={setNoInput}
                            setGoodInput={setGoodInput}
                            authUserT={authUserT}
                            setAuthUser={setAuthUser}
                        /> : null}
                </div>

            </div>
            <div className={noInput !== "" ? styles.activeInf : styles.noActive}>
                <img src={Group52} alt="" />
                <span >данный промокод не был найден!</span>
            </div>
            <div className={goodInput !== "" ? styles.goodInput : styles.notClickGood}>
                <img src={Group53} alt="" />
                <span>промокод успешно активирован!</span>
            </div>
        </div>
    );
}

export default ProfileUsers;
