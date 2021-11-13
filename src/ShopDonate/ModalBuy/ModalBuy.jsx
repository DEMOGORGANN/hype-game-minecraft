import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react/cjs/react.development";


import styles from './ModalBuy.module.css'

export default function ModalBuy({ visible, setVisible, modalinfo, auth }) {
    const [prises, setPrises] = useState(1)

    useEffect(() => {
        document.querySelector("body").style.overflow = visible ? "hidden" : "auto";
    }, [visible])

    useEffect(() => {
        setPrises(1)
    }, [visible])



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
                            <span>- Префикс на сервире [modalinfo.name]</span>
                            <span>- Возможность иметь 15 приватов на сервере</span>
                            <span>- Возможность иметь 15 домов на сервере</span>
                            <span>- Возможность зайти на заполненный сервер</span>

                        </div>
                        <span className={styles.headInput}>Особенности привилегии</span>
                        <div className={styles.wrapInputBut}>
                            <form>
                                <div className={styles.wrapOneInput}>
                                    <input type="radio" name="timeDonate" onClick={() => setPrises(1)} />
                                    <label>14 дней</label>
                                </div>
                                <div className={styles.wrapOneInput}>
                                    <input type="radio" name="timeDonate" onClick={() => setPrises(1.3)} />
                                    <label>1 месяц</label>
                                </div>
                                <div className={styles.wrapOneInput}>
                                    <input type="radio" name="timeDonate" onClick={() => setPrises(1.5)} />
                                    <label>3 месяца</label>
                                </div>
                                <div className={styles.wrapOneInput}>
                                    <input type="radio" name="timeDonate" onClick={() => setPrises(1.8)} />
                                    <label>6 месяцев</label>
                                </div>
                                <div className={styles.wrapOneInput}>
                                    <input type="radio" name="timeDonate" onClick={() => setPrises(2)} />
                                    <label>Год</label>
                                </div>
                                <div className={styles.wrapOneInput}>
                                    <input type="radio" name="timeDonate" onClick={() => setPrises(2.5)} />
                                    <label>Навсегда</label>
                                </div>
                            </form>

                        </div>
                    </div>
                    {auth === true ?
                        <button>приобрести за  ₽{Math.floor(modalinfo.price * prises)}</button> :
                        <NavLink to="/myOffice">Войти</NavLink>}

                </div>

            </div>
        )
    }
}