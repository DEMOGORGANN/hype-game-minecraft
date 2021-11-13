import React from "react";
import { NavLink } from "react-router-dom";
import styles from './ProfileUsers.module.css'

import avatarUser from './../IMG/avatarUser.png'
import Group18 from './../IMG/Group18.svg'

function ProfileUsers({ setAuth }) {

    return (
        <div className={styles.WrapProfileUsers}>

            <div className={styles.leftInfo}>
                <img src={avatarUser} alt="" className={styles.avatar} />
                <div className={styles.balans}>
                    <h3>Баланс</h3>
                    <h2>₽399</h2>
                </div>
                <div className={styles.Donate}>
                    <img src={Group18} alt="" />
                    <span>Нет привелегии</span>
                </div>
                <NavLink exact to="/donate">Преобрести привелегию</NavLink>
                <button>
                    <span>+</span>
                    <span>Пополнить баланс</span>
                </button>
                <button className={styles.exitAccount} onClick={() => setAuth(false)}>выйти</button>
            </div>








        </div>
    );
}

export default ProfileUsers;
