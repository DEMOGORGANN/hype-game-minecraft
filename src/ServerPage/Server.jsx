import React from "react";

import styles from './Server.module.css'
import PlayAndCopy from "./PlayAndCopy/PlayAndCopy";



import quetionImg from './../IMG/quetionImg.png'


function Server() {



    return (
        <div className={styles.wraperServ}>
            <div className={styles.elementsServ}>

                <div className={styles.wrapEl}>
                    <div className={styles.HeadElem}>
                        <div className={styles.leftInfo}>
                            <div className={styles.lobby}>
                                <span className={styles.forBot}>общее лобби</span>
                                <div className={styles.tooltip}>
                                    <img src={quetionImg} alt="" />
                                    <div className={styles.tooltiptext}>Общее лобби позволяет игроку подключиться к серверу и с помощью специального портала перемещаться по режимам!</div>
                                </div>
                            </div>
                            <span>pc.hypegame.com</span>
                        </div>
                        <PlayAndCopy copy={"pc.hypegame.co"} />
                    </div>

                    <div className={styles.bottomElem}>
                        <progress max="2500" value="1500"></progress>

                        <div className={styles.infoOnline}>
                            <div className={styles.circle1}>
                                <div className={styles.circle2}></div>
                            </div>
                            <span>1500/2500</span>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    );
}

export default Server;
