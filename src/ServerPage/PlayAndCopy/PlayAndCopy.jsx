import React from "react";

import styles from './PlayAndCopy.module.css'


import playServ from './../../IMG/playServ.png'
import copyImg from './../../IMG/copyImg.png'

function PlayAndCopy({ copy }) {

    function Copy() {
        navigator.clipboard.writeText(copy)
    }

    return (
        <div className={styles.PlayAndCopy}>
            <div className={styles.rightInfo}>
                <div className={styles.playS}>
                    <span className={styles.forBot}>играть</span>
                    <img src={playServ} alt="" />
                </div>
                <div className={styles.playS1} onClick={Copy} >
                    <span>скопировать IP</span>
                    <img src={copyImg} alt="" />
                </div>
            </div>
        </div>
    );
}

export default PlayAndCopy;
