import React, { useState } from 'react'

import styles from './FaQ.module.css'
import dollar from './../../IMG/dollar.png'

const FaQ = ({ question, title, info }) => {

    const [expanded, setExpanded] = useState(false)


    function Regulations() {
        return (
            <div className={styles.wrapRegulation}>
                {info.map((item) => {

                    return (
                        <div className={styles.spans} key={Math.random() * 100}>
                            <span>{item.one}</span>
                            <span>{item.two}</span>
                            <span>{item.three}</span>
                            <span>{item.four}</span>
                            <span>{item.fife}</span>
                            <span>{item.six}</span>
                            <span>{item.seven}</span>
                            <span>{item.eight}</span>
                        </div>
                    )
                })}

            </div>
        )
    }


    return (

        <article className={styles.question}>
            <header onClick={() => setExpanded(!expanded)}>
                <img src={dollar} alt="" />
                <h4 className='question-title'>
                    {title}
                </h4>
            </header>

            {expanded && <div><hr />{<Regulations />}</div>}
        </article>

    )
}

export default FaQ