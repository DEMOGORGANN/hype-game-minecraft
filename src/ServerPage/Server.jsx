import React from "react";

import styles from './Server.module.css'


import FSTServ from './FirstServ/FSTServ'
import Anarhy from "./Anarhy/Anarhy";
import Survival from "./Survival/Survival";
import SkyWars from "./SkyWars/SkyWars";
import BedWars from "./BedWars/BedWars";

function Server() {



    return (
        <div className={styles.wraperServ}>
            <FSTServ valy={Math.floor(Math.random() * 2500)} />
            <div className={styles.elementsServ}>
                <Anarhy valy={Math.floor(Math.random() * 2500)} />
                <Survival valy={Math.floor(Math.random() * 2500)} />
                <SkyWars valy={Math.floor(Math.random() * 2500)} />
                <BedWars valy={Math.floor(Math.random() * 2500)} />

            </div>
        </div>
    );
}

export default Server;
