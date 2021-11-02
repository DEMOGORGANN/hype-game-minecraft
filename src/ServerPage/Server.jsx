import React from "react";

import styles from './Server.module.css'


import FSTServ from './FirstServ/FSTServ'

function Server() {



    return (
        <div className={styles.wraperServ}>
            <div className={styles.elementsServ}>
                <FSTServ />




            </div>
        </div>
    );
}

export default Server;
