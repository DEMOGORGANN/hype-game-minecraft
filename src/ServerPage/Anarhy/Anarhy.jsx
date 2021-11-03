import React from "react";

import styles from './Anarhy.module.css'

import PlayAndCopy from "./../PlayAndCopy/PlayAndCopy";

import fire from './../../IMG/fire.png'

function Anarhy({ valy }) {
    return (
        <div className={styles.Anarhy}>
            <div className={styles.wrapEl}>
                <div className={styles.HeadElem}>
                    <div className={styles.LeftHead}>
                        <img src={fire} alt="" />
                        <div className={styles.H1H2}>
                            <h1>анархия</h1>
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

export default Anarhy;
