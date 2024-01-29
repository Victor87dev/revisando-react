import React from "react";
import styles from "./Teste2.module.css";

const Teste2 = ({numero})=>{
    
    const cliqueAqui = ()=>{
        console.log(`Fui ativado! ${numero}`)
    }

    return (
        <>
         <p className={styles.mudandoCor}>clique para ativar!</p>
         <button onClick={cliqueAqui}>Ativar</button>
        </>
    )
}

export default Teste2;