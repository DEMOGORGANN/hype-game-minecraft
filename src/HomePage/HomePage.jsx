import React from "react";


import styles from './HomePage.module.css'


import BigImg from "./wrapBigImg/BigImg";
import ForMe from './ForMe/ForMe'
import ForServer from "./ForServers/ForServer";
import ForDonate from "./ForDonate/ForDonate";

function HomePage({ kolUser, setVisible }) {


    return (

        <div className={styles.WrapHomePage}>
            <BigImg setVisible={setVisible}/>
            <ForMe kolUser={kolUser} />
            <ForServer />
            <ForDonate />
        </div >

    );
}

export default HomePage;
