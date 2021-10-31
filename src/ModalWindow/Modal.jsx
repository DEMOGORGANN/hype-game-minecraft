import React from "react";


import styles from './Modal.module.css'

export default function Modal({ visible, setVisible }) {



    if (visible === false) {
        return null;
    } else {
        return (
            <div className={styles.modal} onClick={() => setVisible(false)}>
                <div className={styles.modalDialog} onClick={e => e.stopPropagation()}>
                    <div className={styles.modalHeader}>
                        <h3 className={styles.modalTitle}>Вход</h3>
                    </div>
                    <div className={styles.modalBody}>
                        <input type="text" placeholder="Введите свой игровой ник" />
                    </div>
                    <div className={styles.zxWrapBut}>
                        <button onClick={() => setVisible(false)}>войти в личный кабинет</button>
                    </div>
                </div>
            </div>
        )
    }
}