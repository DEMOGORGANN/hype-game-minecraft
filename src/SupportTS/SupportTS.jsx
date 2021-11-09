import React, { useState } from "react";

import styles from './SupportTS.module.css'
import data from './data'
import FaQ from "./FaQ/FaQ";
import HelpMe from "./HelpMe/HelpMe";

function SupportTS() {

    const [questions] = useState(data)

    return (

        <div className={styles.wrapSup}>
            <HelpMe />
            <section>
                {questions.map((question) => (
                    <FaQ key={question.id} question={question} {...question} />
                ))}
            </section>
        </div>

    )
}

export default SupportTS;
