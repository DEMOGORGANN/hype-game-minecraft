import React, { useEffect, useState } from "react";


import styles from './BanList.module.css'

import seachUserBut from './../IMG/seachUser.png'

function BanList() {

    const [banList, setBanLins] = useState([])

    let lastUserBan = "";
    banList.forEach(i => {
        lastUserBan = i.nameBan;
    })


    useEffect(() => {
        fetch("http://localhost:3000/banList")
            .then(res => res.json())
            .then(
                (result) => {
                    setBanLins(result);
                }
            )
    }, [])



    return (
        <div className={styles.wrapBanList}>
            <div className={styles.wrapHeadList}>
                <div className={styles.Elements}>
                    <span>всего банов:</span>
                    <h3>{banList.length * 57}</h3>
                </div>
                <div className={styles.Elements}>
                    <span>кол-во администраторов:</span>
                    <h3>{banList.length * 13}</h3>
                </div>
                <div className={styles.Elements}>
                    <span>кол-во разбаненных:</span>
                    <h3>{banList.length * 9}</h3>
                </div>
                <div className={styles.Elements}>
                    <span>всего банов:</span>
                    <h3>{banList.length}</h3>
                </div>
                <div className={styles.Elements}>
                    <span>последний бан:</span>
                    <h3>{lastUserBan}</h3>
                </div>
                <div className={styles.MyInput}>
                    <input type="text" placeholder="Поиск игрока" />
                    <button><img src={seachUserBut} alt="" /></button>
                </div>
            </div>

        </div>
    );
}

export default BanList;
