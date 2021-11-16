import React, { useEffect, useState } from "react";


import styles from './BanList.module.css'

import seachUserBut from './../IMG/seachUser.png'

function BanList() {



    const [banList, setBanLins] = useState([])
    const [value, setValue] = useState("")
    const [binder, setBinder] = useState([])

    let lastUserBan = "";
    banList.forEach(i => {
        lastUserBan = i.nameBan;
    })

    const lastEightUsers = binder.slice(-8).reverse();


    useEffect(() => {
        if (value === " " || value === "") {
            setBinder(banList)
        }
    }, [value, banList])



    useEffect(() => {
        fetch("http://localhost:3000/banList")
            .then(res => res.json())
            .then(
                (result) => {
                    setBanLins(result);
                    setBinder(result)

                }
            )
    }, [])

    function onCheach() {
        setBinder(seach(banList, value))
        function seach(arr, find) {
            return arr.filter(function (values) {
                return values.nameBan.indexOf(find) !== -1;
            });
        }
    }


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
                    <input type="text" placeholder="Поиск игрока" onChange={(e) => setValue(e.target.value)} />
                    <button><img src={seachUserBut} alt="" onClick={onCheach} /></button>
                </div>

            </div>




            <div className={styles.wrapInfoBanUser}>
                <div className={styles.infs}>
                    <span>БАН ID</span>
                    <span>имя игрока</span>
                    <span>Название сервера</span>
                    <span>забанил</span>
                    <span>причина</span>
                    <span>дата бана</span>
                </div>
                <div className={styles.wrapBanUser}>
                    {
                        lastEightUsers.map(item => {
                            return (
                                <div key={item.banId} className={styles.UserInfo}>
                                    <span>{item.banId}</span>
                                    <span>{item.nameBan}</span>
                                    <span>{item.nameServ}</span>
                                    <span>{item.banFor}</span>
                                    <span>{item.cause}</span>
                                    <span>{item.dateBan}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    );
}

export default BanList;
