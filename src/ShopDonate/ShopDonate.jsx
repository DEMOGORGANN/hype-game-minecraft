import React from "react";
import { useState } from "react/cjs/react.development";


import styles from './ShopDonate.module.css'


import warrior3 from './../IMG/warrior3.png'
import warrior6 from './../IMG/warrior6.png'
import warrior5 from './../IMG/warrior5.png'
import warrior from './../IMG/PersMIn.png'
import warrior10 from './../IMG/warrior10.png'
import warrior4 from './../IMG/warrior4.png'
import warrior11 from './../IMG/warrior11.png'
import warrior8 from './../IMG/warrior8.png'
import ModalBuy from "./ModalBuy/ModalBuy";

function ShopDonate() {

    const [activeBut, setActiveBut] = useState("Survival")
    const [visible, setVisible] = useState(false)
    const [modalinfo, setModalInfo] = useState({})
    const [SurvivalBlock] = useState(
        [
            { id: 1, nameDonate: "ВОИН", price: 199, img: warrior3, divStyle: styles.one },
            { id: 2, nameDonate: "премиум", price: 299, img: warrior6, divStyle: styles.two },
            { id: 3, nameDonate: "креатив", price: 499, img: warrior5, divStyle: styles.three },
            { id: 4, nameDonate: "АДМИН", price: 549, img: warrior, divStyle: styles.four },
            { id: 5, nameDonate: "лорд", price: 750, img: warrior10, divStyle: styles.fife },
            { id: 6, nameDonate: "ГЛ.АДМИН", price: 1009, img: warrior4, divStyle: styles.six },
            { id: 7, nameDonate: "создатель", price: 1499, img: warrior11, divStyle: styles.seven },
            { id: 8, nameDonate: "ОСНОВАТЕЛЬ", price: 3499, img: warrior8, divStyle: styles.eight },
        ]
    )
    const [GriefBlock] = useState(
        [
            { id: 1, nameDonate: "ВОИН", price: 199, img: warrior3, divStyle: styles.one },
            { id: 2, nameDonate: "премиум", price: 299, img: warrior6, divStyle: styles.two },
            { id: 3, nameDonate: "креатив", price: 499, img: warrior5, divStyle: styles.three },
            { id: 4, nameDonate: "АДМИН", price: 549, img: warrior, divStyle: styles.four },
        ]
    )
    const [PvPAreaBlock] = useState(
        [
            { id: 1, nameDonate: "ВОИН", price: 199, img: warrior3, divStyle: styles.one },
            { id: 2, nameDonate: "премиум", price: 299, img: warrior6, divStyle: styles.two },
        ]
    )

    const BlogDonate = () => {

        let viewDonate = SurvivalBlock;

        if (activeBut === "Survival") {
            viewDonate = SurvivalBlock;
        } else if (activeBut === "Grief") {
            viewDonate = GriefBlock;
        } else if (activeBut === "PvPArea") {
            viewDonate = PvPAreaBlock;
        } else {
            viewDonate = SurvivalBlock
        }

        return (
            <div className={styles.wrapPageDodateBlock}>
                {
                    viewDonate.map(i => {
                        return (

                            <div
                                className={`${styles.wrapDonateBlock} ${i.divStyle}`}
                                key={i.id}
                                onClick={() => {
                                    setVisible(true);
                                    setModalInfo({ name: i.nameDonate, price: i.price, img: i.img })
                                }}>

                                <div className={styles.infoDonate}>
                                    <span>{i.nameDonate}</span>
                                    <span>ОТ ₽{i.price}</span>
                                </div>
                                <div>
                                    <img src={i.img} alt="" />
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        )

    }




    return (
        <div className={styles.wrapShop}>
            <ModalBuy visible={visible} setVisible={setVisible} modalinfo={modalinfo} />
            <div className={styles.wrapBut}>
                <button
                    className={activeBut === "Survival" ? styles.activeBut : 0}
                    onClick={() => setActiveBut("Survival")}>
                    выживание
                </button>
                <button
                    className={activeBut === "Grief" ? styles.activeBut : 0}
                    onClick={() => setActiveBut("Grief")}>
                    гриферский
                </button>
                <button
                    className={activeBut === "PvPArea" ? styles.activeBut : 0}
                    onClick={() => setActiveBut("PvPArea")}>
                    pvp арена
                </button>
                <button
                    className={activeBut === "NewServ" ? styles.activeBut : 0}
                    onClick={() => setActiveBut("NewServ")}>
                    новый сервер
                </button>
            </div>

            <BlogDonate />

        </div>
    );
}

export default ShopDonate;
