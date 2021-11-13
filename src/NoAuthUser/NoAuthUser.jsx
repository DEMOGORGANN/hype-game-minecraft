import React from "react";

import styles from './NoAuthUser.module.css'

export default function NoAuthUser({ setVisible }) {

    return (
        <div className={styles.wrapNoAuthUser}>
            <h1>Упс, вам необходимо войти....</h1>
            <button onClick={() => setVisible(true)}>Вход</button>
        </div>
    )

}