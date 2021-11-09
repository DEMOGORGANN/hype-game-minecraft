import React from "react";

import styles from './HelpMe.module.css'
import vk from './../../IMG/Vk.png'

function HelpMe() {


    return (

        <div className={styles.HelpMe}>
            <h1>не нашли ответ на свой вопрос? </h1>
            <h3>задай вопрос через вк и в ближайшее время мы ответим на него или решим какую-либо проблему!</h3>
            <button><img src={vk} alt="" /> задать вопрос в Vk</button>
        </div>

    )
}

export default HelpMe;
