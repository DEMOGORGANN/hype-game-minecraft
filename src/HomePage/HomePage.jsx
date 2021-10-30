import React from "react";
import { NavLink } from "react-router-dom";


import pickMinecraft from './../IMG/pickMinecraft.png'
import imgMincrf from './../IMG/imgMincrf.png'
import koob1 from './../IMG/koob1.png'
import koob2 from './../IMG/koob2.png'
import koob3 from './../IMG/kuub3.png'
import ImgInfoServ from './../IMG/ImgInfoServ.png'
import ImgInfoHost from './../IMG/ImgInfoHost.png'
import processor from './../IMG/processor.png'
import memory from './../IMG/memory.png'
import SSD from './../IMG/SSD.png'
import donateImgHomePage from './../IMG/donateImgHomePage.png'
import PersMIn from './../IMG/PersMIn.png'
import Market from './../IMG/Market.png'

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

            <div className={styles.wrapInfoMe2}>
                <img src={ImgInfoHost} alt="" />
                <div className={styles.wrapSevrHost}>
                    <h2>Сервера стоят на лучшем хостинге, поэтому игра будет доставлять только удовольствие!</h2>
                    <div className={styles.equipment}>
                        <div className={styles.sadas}>
                            <img src={processor} alt="" />
                            <span>
                                Intel Core
                                <br />
                                i7-8700
                            </span>
                        </div>
                        <div className={styles.sadas}>
                            <img src={memory} alt="" />
                            <span>
                                32гб
                                <br />
                                DDR4
                            </span>
                        </div>
                        <div className={styles.sadas}>
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

            <div className={styles.wrapInfoMe3}>
                <div className={styles.infoDonateHomePage}>
                    <h2>У нас отсутствуют большие преимущества от доната</h2>

                    <div className={styles.wrapInfoDonate}>
                        <div className={styles.WrapFirstEl}>
                            <div className={styles.wrapInfoAdmin}>
                                <span>Админ</span>
                                <span>от ₽399</span>
                            </div>
                            <img src={PersMIn} alt="" />
                        </div>

                        <div className={styles.WrapLastEl}>
                            <img src={Market} alt="" />

                            <div className={styles.wrapLinkMarketAndArrow}>
                                <NavLink exact to='/maskGro'>Перейти в магазин<br /> к привелегиям</NavLink>
                                <div className={styles.arrow}>
                                    <div></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <img src={donateImgHomePage} alt="" />
            </div>
        </div >

    );
}

export default HomePage;
