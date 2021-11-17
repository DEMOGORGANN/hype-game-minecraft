import React from "react";
import { useState, useEffect } from "react/cjs/react.development";


import styles from './ModalWAddBalance.module.css'


import yandex from './../../IMG/yandex.png'
import ethereum1 from './../../IMG/ethereum1.png'
import bitcoin from './../../IMG/Group29.png'
import Steam from './../../IMG/MaskGroupasdsa.png'
import Visaa from './../../IMG/Visaa.png'
import MstrCard from './../../IMG/MstrCard.png'
import Logoqiwirgb1 from './../../IMG/Logo_qiwi_rgb1.png'

export default function ModalWAddBalancemodule({ visibleModBuy, setVisibleModBuy }) {


    const [activBut, setActivBut] = useState("UNITPAY")
    const [butInBuyCoom, setButInBuyCoom] = useState("Yandex")

    useEffect(() => {
        document.querySelector("body").style.overflow = visibleModBuy ? "hidden" : "auto";
    }, [visibleModBuy])


    function UpitPay() {

        return (
            <div className={styles.wrapUnitsPay}>
                <div
                    className={`${styles.Yandex} ${butInBuyCoom === "Yandex" ? styles.activBTS : null}`}
                    onClick={() => setButInBuyCoom("Yandex")}>
                    <img src={yandex} alt="" />
                </div>
                <div
                    className={`${styles.ethereum1} ${butInBuyCoom === "ethereum1" ? styles.activBTS : null}`}
                    onClick={() => setButInBuyCoom("ethereum1")}>
                    <img src={ethereum1} alt="" />
                </div>
                <div
                    className={`${styles.bitcoin} ${butInBuyCoom === "bitcoin" ? styles.activBTS : null}`}
                    onClick={() => setButInBuyCoom("bitcoin")}>
                    <img src={bitcoin} alt="" />
                </div>
                <div
                    className={`${styles.Steam} ${butInBuyCoom === "Steam" ? styles.activBTS : null}`}
                    onClick={() => setButInBuyCoom("Steam")}>
                    <img src={Steam} alt="" />
                </div>
            </div>
        )
    }

    function FreeKasse() {

        return (
            <div className={styles.wrapUnitsPay}>
                <div
                    className={`${styles.Visaa} ${butInBuyCoom === "Visaa" ? styles.activBTS : null}`}
                    onClick={() => setButInBuyCoom("Visaa")}>
                    <img src={Visaa} alt="" />
                </div>
                <div
                    className={`${styles.MstrCard} ${butInBuyCoom === "MstrCard" ? styles.activBTS : null}`}
                    onClick={() => setButInBuyCoom("MstrCard")}>
                    <img src={MstrCard} alt="" />
                </div>
                <div
                    className={`${styles.Logoqiwirgb1} ${butInBuyCoom === "Logoqiwirgb1" ? styles.activBTS : null}`}
                    onClick={() => setButInBuyCoom("Logoqiwirgb1")}>
                    <img src={Logoqiwirgb1} alt="" />
                </div>
            </div>
        )
    }

    if (visibleModBuy === false) {
        return null;
    } else {
        return (
            <div className={styles.modal} onClick={() => setVisibleModBuy(false)}>
                <div className={styles.modalDialog} onClick={e => e.stopPropagation()}>
                    <h1>пополнение баланса</h1>
                    <input type="text" placeholder="Введите сумму пополнения" />
                    <input type="text" placeholder="Промокод" />
                    <h2>выберите способ оплаты</h2>
                    <div className={styles.wrapButtonsBuy}>
                        <button
                            className={activBut === "UNITPAY" ? styles.activButB : null}
                            onClick={() => {
                                setActivBut("UNITPAY")
                                setButInBuyCoom("Yandex")
                            }}>
                            оплата unitpay
                        </button>
                        <button
                            className={activBut === "freekassa" ? styles.activButB : null}
                            onClick={() => {
                                setActivBut("freekassa")
                                setButInBuyCoom("Visaa")
                            }}>
                            оплата freekassa
                        </button>
                    </div>
                    {activBut === "UNITPAY" ? <UpitPay /> : <FreeKasse />}
                    <button onClick={() => setVisibleModBuy(false)}>пополнить баланс</button>
                </div>
            </div>
        )
    }
}