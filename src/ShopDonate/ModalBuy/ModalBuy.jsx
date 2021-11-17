import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react/cjs/react.development";


import styles from './ModalBuy.module.css'

export default function ModalBuy({ visible, setVisible, modalinfo, auth, authUserT, setAuthUser }) {
    const [prises, setPrises] = useState(1)
    const [dateDonate, setDate] = useState({ day: 0, mount: 0, year: 0, fullTime: "" })

    useEffect(() => {
        document.querySelector("body").style.overflow = visible ? "hidden" : "auto";
    }, [visible])

    useEffect(() => {
        setPrises(1)
    }, [visible])


    function buyDonate(e) {
        e.preventDefault()
        if (authUserT.money > Math.floor(modalinfo.price * prises)) {
            setVisible(false)
            getAndSetDate(dateDonate)
        }
    }
    function getAndSetDate({ day, mount, year, fullTime }) {
        if (fullTime === "Навсегда") {
            const time = "Навсегда"
            const bufUsr = {
                name: authUserT.name,
                password: authUserT.password,
                money: authUserT.money - Math.floor(modalinfo.price * prises),
                donate: modalinfo.name,
                dateDonate: time
            }
            setAuthUser(bufUsr)
        } else {
            let time = new Date()
            let dd = Number(String(time.getDate()).padStart(2, '0')) + day;
            let mm = Number(String(time.getMonth() + 1).padStart(2, '0')) + mount;
            var yyyy = time.getFullYear() + year;
            if (dd > 31) {
                mm++
                dd = dd - 31
            }
            if (mm > 12) {
                yyyy++
                mm = mm - 12
            }

            time = dd + '.' + mm + '.' + yyyy;
            const bufUsr = {
                name: authUserT.name,
                password: authUserT.password,
                money: authUserT.money - Math.floor(modalinfo.price * prises),
                donate: modalinfo.name,
                dateDonate: time
            }
            setAuthUser(bufUsr)
        }

    }



    if (visible === false) {
        return null;
    } else {
        return (
            <div className={styles.modal} onClick={() => setVisible(false)}>

                <div className={styles.modalDialog} onClick={e => e.stopPropagation()}>
                    <div className={styles.full}>
                        <div className={styles.headInf}>
                            <span className={styles.headInfo}>{modalinfo.name}</span>
                            <img src={modalinfo.img} alt="" />
                        </div>
                        <div className={styles.wrapInfoDonat}>
                            <span>- Смена погоды</span>
                            <span>- Установка времени для себя</span>
                            <span>- Запустить огненный шар</span>
                            <span>- Бессмертие</span>
                            <span>- Починить вещи</span>
                            <span>- Чистка инвентаря</span>
                            <span>- Дать себе опыт</span>
                            <span>- Прыжок</span>
                            <span>- Пройти сквозь стену</span>
                            <span>- Набор</span>
                            <span>- Эндерсундук</span>
                            <span>- Префикс на сервире "{modalinfo.name}"</span>
                            <span>- Возможность иметь 15 приватов на сервере</span>
                            <span>- Возможность иметь 15 домов на сервере</span>
                            <span>- Возможность зайти на заполненный сервер</span>

                        </div>
                        <span className={styles.headInput}>Особенности привилегии</span>
                        <div className={styles.wrapInputBut}>
                            <form>
                                <div className={styles.wrapOneInput}>
                                    <input
                                        type="radio"
                                        name="timeDonate"
                                        onClick={() => {
                                            setPrises(1)
                                            setDate({ day: 14, mount: 0, year: 0, fullTime: "" })
                                        }}
                                    />
                                    <label>14 дней</label>
                                </div>
                                <div className={styles.wrapOneInput}>
                                    <input
                                        type="radio"
                                        name="timeDonate"
                                        onClick={() => {
                                            setPrises(1.3)
                                            setDate({ day: 0, mount: 1, year: 0, fullTime: "" })
                                        }}
                                    />
                                    <label>1 месяц</label>
                                </div>
                                <div className={styles.wrapOneInput}>
                                    <input
                                        type="radio"
                                        name="timeDonate"
                                        onClick={() => {
                                            setPrises(1.5)
                                            setDate({ day: 0, mount: 3, year: 0, fullTime: "" })
                                        }}
                                    />
                                    <label>3 месяца</label>
                                </div>
                                <div className={styles.wrapOneInput}>
                                    <input
                                        type="radio"
                                        name="timeDonate"
                                        onClick={() => {
                                            setPrises(1.8)
                                            setDate({ day: 0, mount: 6, year: 0, fullTime: "" })
                                        }}
                                    />
                                    <label>6 месяцев</label>
                                </div>
                                <div className={styles.wrapOneInput}>
                                    <input
                                        type="radio"
                                        name="timeDonate"
                                        onClick={() => {
                                            setPrises(2)
                                            setDate({ day: 0, mount: 0, year: 1, fullTime: "" })
                                        }}
                                    />
                                    <label>Год</label>
                                </div>
                                <div className={styles.wrapOneInput}>
                                    <input
                                        type="radio"
                                        name="timeDonate"
                                        onClick={() => {
                                            setPrises(2.5)
                                            setDate({ day: 0, mount: 0, year: 0, fullTime: "Навсегда" })
                                        }}
                                    />
                                    <label>Навсегда</label>
                                </div>
                            </form>

                        </div>
                    </div>
                    {auth === true ?
                        <button onClick={(e) => buyDonate(e)}>приобрести за  ₽{Math.floor(modalinfo.price * prises)}</button> :
                        <NavLink to="/myOffice">Войти</NavLink>}

                </div>

            </div>
        )
    }
}