import React from "react";
import styles from "./Condicional.module.css";
import { useState } from "react";

const Condicional = ()=>{
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    const resultEmail = (e)=>{
        e.preventDefault()
        setUserEmail(email)
    }

    const limpaEmail = ()=>{
        setUserEmail("")
    }

    return (
      <>
      <h1>Insira o email</h1>
      <form>
        <input type="email" placeholder="Insira o seu email..." onChange={(e) => setEmail(e.target.value)}/>
        <button type="submit" onClick={resultEmail}>Ativar email</button>
      </form>
      {userEmail &&(
        <div className={styles.caixaPreta}>
        <p>o email do usuario é {userEmail}</p>
        <button onClick={limpaEmail}>limpar email</button>
        </div>
      )

      }
      </>
    )

}

export default Condicional