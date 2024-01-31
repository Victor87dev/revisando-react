import React from "react";
import Styles from "./Lista.module.css"

const Lista = ({ itens })=>{
    return(
        <>
         <h3>Lista de coisas boas:</h3>
         
         {  itens.length > 0 ? (
            itens.map((item, index)=>(
               <p key={index} className={Styles.caixaPreta}>{item}</p>
            ))): (
                <p>Não tem itens na lista</p>
            )
         }
         
        
        </>
    )
}

export default Lista