import React, { useState } from "react";

import styles from './MainInfo.module.css'

import Koob from './../../IMG/Koob.png'
import Vector2 from './../../IMG/Vector2.png'
import minecraft1 from './../../IMG/minecraft1.png'
import block1 from './../../IMG/block1.png'
import nome1 from './../../IMG/#1.png'
import dollar from './../../IMG/dollar.png'

function MainInfo() {

    const [infoMain] = useState
        ([
            { id: 1, img: Koob, kol: Math.floor(Math.random() * 1000), desk: "Кол-во поставленных блоков", divStyle: styles.green },
            { id: 2, img: Vector2, kol: Math.floor(Math.random() * 1000), desk: "Кол-во убийств", divStyle: styles.pirple },
            { id: 3, img: minecraft1, kol: Math.floor(Math.random() * 1000), desk: "Кол-во сломанных блоков", divStyle: styles.red },
            { id: 4, img: block1, kol: Math.floor(Math.random() * 1000), desk: "Место среди других игроков по валюте", divStyle: styles.yellow },
            { id: 5, img: nome1, kol: Math.floor(Math.random() * 1000), desk: "Место среди других игроков по убийствам", divStyle: styles.blue },
            { id: 6, img: dollar, kol: Math.floor(Math.random() * 1000), desk: "Кол-во игровой валюты", divStyle: styles.twoRed }
        ])

    console.log(infoMain)
    return (
        <div className={styles.MainInform}>
            {infoMain.map(i => {
                return (
                    <div className={`${styles.wrapOneBlock} ${i.divStyle}`} key={i.id}>
                        <img src={i.img} alt="" />
                        <h3>{i.kol}</h3>
                        <span>{i.desk}</span>
                    </div>
                )
            })}
        </div>
    );
}

export default MainInfo;
