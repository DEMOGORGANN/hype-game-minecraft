import React, { useEffect, useState } from "react";
import styles from './Promocode.module.css'


function Promocode({ noInput, setNoInput, setGoodInput }) {

    const [promocode, setPromocode] = useState([])
    const [valuePromocode, setValuePromocode] = useState("")


    useEffect(() => {
        fetch("http://localhost:3000/promocode")
            .then(res => res.json())
            .then(
                (result) => {
                    setPromocode(result);
                }
            )
    }, [])

    function onClickPromocode(e) {
        e.preventDefault()

        console.log(valuePromocode)
        promocode.forEach(i => {
            console.log(i)
            if (i === valuePromocode) {
                console.log("super")
                setGoodInput(styles.goodInput)
                setNoInput("")
            } else {
                setNoInput(styles.noInput)
                setGoodInput("")
            }
        })
    }


    return (
        <div className={styles.WrapPromocode}>

            <h1>промокоды</h1>
            <form>
                <input
                    className={noInput}
                    type="text"
                    placeholder="Введите промокод"
                    onChange={(e) => {
                        setValuePromocode(e.target.value)
                        setNoInput("")
                    }} />
                <button onClick={(e) => onClickPromocode(e)}>активировать промокод</button>
            </form>


        </div>
    );
}

export default Promocode;
