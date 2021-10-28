import React from "react";


import pickMinecraft from './../IMG/pickMinecraft.png'
import imgMincrf from './../IMG/imgMincrf.png'
import koob1 from './../IMG/koob1.png'
import koob2 from './../IMG/koob2.png'
import koob3 from './../IMG/kuub3.png'
import ImgInfoServ from './../IMG/ImgInfoServ.png'

import styles from './HomePage.module.css'

function HomePage({ kolUser }) {


    return (

        <div className={styles.WrapHomePage}>
            <h2 className={styles.TITLETILE}>Начни увлекательное выживание на наших серверах!</h2>
            <button>
                <img src={pickMinecraft} alt="" />
                <span>НАЧАТЬ ИГРАТЬ</span>
            </button>
            <div className={styles.bigImg}>
                <img src={imgMincrf} alt="" />
                <div className={styles.wrapKoob}>
                    <img src={koob1} alt="" className={styles.koob1} />
                    <img src={koob2} alt="" className={styles.koob2} />
                    <img src={koob3} alt="" className={styles.koob3} />
                </div>
            </div>
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
        </div >

    );
}

export default HomePage;
