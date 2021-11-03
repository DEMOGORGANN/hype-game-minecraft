import React from "react";

import styles from './BedWars.module.css'

import PlayAndCopy from "./../PlayAndCopy/PlayAndCopy";

import BedBedWars from './../../IMG/BedBedWars.png'

function BedWars({ valy }) {
    return (
        <div className={styles.BedWars}>
            <div className={styles.wrapEl}>
                <div className={styles.HeadElem}>
                    <div className={styles.LeftHead}>
                        <img src={BedBedWars} alt="" />
                        <div className={styles.H1H2}>
                            <h1>BedWars</h1>
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

export default BedWars;