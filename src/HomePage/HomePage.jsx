import React from "react";


import pickMinecraft from './../IMG/pickMinecraft.png'

import styles from './HomePage.module.css'

function HomePage() {
    return (

        <div className={styles.WrapHomePage}>
            <h2>Начни увлекательное выживание на наших серверах!</h2>
            <button>
                <img src={pickMinecraft} alt="" />
                <span>НАЧАТЬ ИГРАТЬ</span>
            </button>
        </div>

    );
}

export default HomePage;
