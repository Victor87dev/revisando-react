import React from "react";
import Button from "../Button/Button";

const Evento = ()=>{
    const evento1 = ()=>{
        console.log("Button1 ativado")
    }
    const evento2 = ()=>{
        console.log("Button2 ativado")
    }
    return (
        <>
        <p>Clique para disparar um evento</p>
        <Button event={evento1} text="Primeiro evento" />
        <Button event={evento2} text="Segundo evento" />
        </>
    )
}

export default Evento