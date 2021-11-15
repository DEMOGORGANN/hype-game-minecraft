import React from "react";
import { useState, useEffect } from "react/cjs/react.development";


import styles from './Modal.module.css'

export default function Modal({ visible, setVisible, setAuth, auth, setAuthUser }) {

    const [users, setUsers] = useState()
    const [valueLogin, setLogin] = useState("")
    const [valuePassword, setPassword] = useState("")
    const [checkGoodInfo, setInfo] = useState(true)

    useEffect(() => {
        fetch("http://localhost:3000/users")
            .then(res => res.json())
            .then(
                (result) => {
                    setUsers(result);
                }
            )
    }, [])
    useEffect(() => {
        setLogin("")
        setPassword("")
    }, [auth])


    const ToComeIn = () => {
        users.forEach(i => {
            console.log(i.name)
            if (i.name === valueLogin && i.password === valuePassword) {
                setAuth(true)
                setVisible(false)
                setAuthUser(i)
            }
            else {
                setInfo(false)
            }
        })
    }


    if (visible === false) {
        return null;
    } else {
        return (
            <div className={styles.modal} onClick={() => setVisible(false)}>
                <div className={styles.modalDialog} onClick={e => e.stopPropagation()}>
                    <div className={styles.modalHeader}>
                        <h3 className={styles.modalTitle}>Вход</h3>
                    </div>
                    <div className={`${styles.modalBody} ${checkGoodInfo === true ? 0 : styles.noAuth}`} >
                        <input
                            type="text"
                            placeholder="Введите свой игровой ник"
                            onChange={(e) => {
                                setLogin(e.target.value)
                                setInfo(true)
                            }} />
                    </div>
                    <div className={`${styles.modalBody} ${checkGoodInfo === true ? 0 : styles.noAuth}`}>
                        <input
                            type="text"
                            placeholder="Введите свой пароль"
                            onChange={(e) => {
                                setPassword(e.target.value)
                                setInfo(true)
                            }} />
                    </div>
                    <div className={styles.zxWrapBut}>
                        <button to="/dsf" onClick={ToComeIn}>войти в личный кабинет</button>
                    </div>
                </div>
            </div>
        )
    }
}