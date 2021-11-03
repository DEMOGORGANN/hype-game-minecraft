import React from "react";

import styles from './Survival.module.css'

import PlayAndCopy from "./../PlayAndCopy/PlayAndCopy";

import CraftMin from './../../IMG/CraftMin.png'

function Survival({ valy }) {
    return (
        <div className={styles.Survival}>
            <div className={styles.wrapEl}>
                <div className={styles.HeadElem}>
                    <div className={styles.LeftHead}>
                        <img src={CraftMin} alt="" />
                        <div className={styles.H1H2}>
                            <h1>Выживание</h1>
                            <h2>pc.hypegame.com</h2>
                        </div>
                    </div>
                    <PlayAndCopy copy={"pc.hypegame.co"} />
                </div>
                <div className={styles.bottomElem}>
                    <progress max="2500" value={valy}></progress>
                    <div className={styles.infoOnline}>
                        <div className={styles.circle1}>
                            <div className={styles.circle2}></div>
                        </div>
                        <span>{valy}/2500</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Survival;