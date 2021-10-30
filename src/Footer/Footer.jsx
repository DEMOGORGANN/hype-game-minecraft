import React from "react";

import styles from './Footer.module.css'

import logoFooter from './../IMG/logoFooter.png'
import InstagramFoot from './../IMG/InstagramFoot.png'
import VkFoot from './../IMG/VkFoot.png'
import Discord from './../IMG/Discord.png'
import visaFoot from './../IMG/visaFoot.png'
import masterCartFoot from './../IMG/masterCartFoot.png'


function Footer() {

    return (
        <div className={styles.WrapFooter}>
            <div className={styles.firsBlogFoot}>
                <span>Copyright. 2020</span>
                <img src={logoFooter} alt="" />
            </div>
            <div className={styles.LastBlogFoot}>
                <img src={InstagramFoot} alt="" />
                <img src={VkFoot} alt="" />
                <img src={Discord} alt="" />
                <img src={visaFoot} alt="" />
                <img src={masterCartFoot} alt="" />
            </div>
        </div>
    );
}

export default Footer;
