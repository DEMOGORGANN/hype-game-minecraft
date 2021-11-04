import React, { useEffect, useState } from "react";


import styles from './BanList.module.css'

function BanList() {

    const [banList, setBanLins] = useState([])


    useEffect(() => {
        fetch("http://localhost:3000/banList")
            .then(res => res.json())
            .then(
                (result) => {
                    setBanLins(result);
                }
            )

    }, [])



    return (
        <div>
            
        </div>
    );
}

export default BanList;
