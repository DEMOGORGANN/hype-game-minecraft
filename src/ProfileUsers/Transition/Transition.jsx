import React from "react";
import styles from './Transition.module.css'

import Nice from './../../IMG/Nice.svg'
import NoNice from './../../IMG/NoNice.svg'
function Transition({ authUserT }) {


    return (
        <div className={styles.wrapTransition}>
            <div className={styles.infs}>
                <span>код</span>
                <span>действие</span>
                <span>время</span>
                <span>статус</span>
            </div>
            <div className={styles.wrapUserTra}>
                {authUserT.ListTrans.map(i => {
                    return (
                        <div key={i.id} className={styles.TransitionInf}>
                            <span>{i.id}</span>
                            <span>{i.doIt}</span>
                            <span>{i.times}</span>
                            <div className={styles.wrapStatus}>
                                {i.status === "Проведено" ? <img src={Nice} alt="" /> : <img src={NoNice} alt="" />}
                                {i.status === "Проведено" ? <span style={{ color: "#20CA46" }}>Проведено</span> : <span style={{ color: "#D15454" }}>Отменено</span>}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Transition;
