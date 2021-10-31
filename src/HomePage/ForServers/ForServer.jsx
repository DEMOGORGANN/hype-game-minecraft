import React from "react";



import ImgInfoHost from './../../IMG/ImgInfoHost.png'
import processor from './../../IMG/processor.png'
import memory from './../../IMG/memory.png'
import SSD from './../../IMG/SSD.png'

import styles from './ForServer.module.css'


export default function ForServer() {
    return (
        <div className={styles.wrapServ}>
            <img src={ImgInfoHost} alt="" />
            <div className={styles.wrapSevrHost}>
                <h2>Сервера стоят на лучшем хостинге, поэтому игра будет доставлять только удовольствие!</h2>
                <div className={styles.equipment}>
                    <div className={styles.wrapBlock}>
                        <img src={processor} alt="" />
                        <span>
                            Intel Core
                            <br />
                            i7-8700
                        </span>
                    </div>
                    <div className={styles.wrapBlock}>
                        <img src={memory} alt="" />
                        <span>
                            32гб
                            <br />
                            DDR4
                        </span>
                    </div>
                    <div className={styles.wrapBlock}>
                        <img src={SSD} alt="" />
                        <span>
                            480гб
                            <br />
                            SSD
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}