import React from "react";
import styles from "./Teste1.module.css";

const Teste1 = ({nome})=>{
    return (
        <>
         <p className={styles.mudandoCor} >Fala ai {nome}</p>
        </>
    )
}

export default Teste1;