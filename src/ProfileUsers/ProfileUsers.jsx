import React, { useState } from "react";
import styles from './ProfileUsers.module.css'

import LeftInfo from './LeftInfo/LeftInfo'
import MainInfo from "./MainInfo/MainInfo";

function ProfileUsers({ setAuth, authUserT }) {

    const [activButtn, setActivButts] = useState('MainInf')



    return (
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
                <MainInfo />
            </div>








        </div>
    );
}

export default ProfileUsers;
