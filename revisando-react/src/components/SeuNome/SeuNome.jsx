import React from "react";

const SeuNome = ({ setNome })=>{
    return (
        <>
        <h3>Insira seu nome</h3>
        <input type="text" placeholder="Qual o seu nome ?" onChange={(e) => setNome(e.target.value)} />
        </>
    )
}

export default SeuNome