import React from "react";

import styles from './ForMe.module.css'
import ImgInfoServ from './../../IMG/ImgInfoServ.png'

export default function ForMe({ kolUser }) {
    return (
        <div className={styles.ForMe}>

            <span className={styles.titleMe}>О НАС</span>
            <div className={styles.wrapInfoMe1}>
                <div className={styles.intoServers}>
                    <h2>На серверах ежедневно играет более 10000 пользователей!</h2>
                    <div className={styles.wrapUserInfoServ}>
                        <div className={styles.UserInfoServ}>
                            <div className={styles.cirleFull}>
                                <div className={`${styles.circle1} ${styles.green}`}>
                                    <div className={styles.circle2}></div>
                                </div>
                                <h3 className={styles.greenCol}>
                                    {kolUser}
                                </h3>
                            </div>
                            <span>В данный момент на серверах играет</span>
                        </div>
                        <div className={styles.UserInfoServ}>
                            <div className={styles.cirleFull}>
                                <div className={`${styles.circle1} ${styles.blue}`}>
                                    <div className={styles.circle2}></div>
                                </div>
                                <h3 className={styles.blueCol}>
                                    414244
                                </h3>
                            </div>
                            <span>Кол-во зарегистрированных игроков</span>
                        </div>
                    </div>
                </div>
                <img src={ImgInfoServ} alt="" />
            </div>
        </div>
    )
}