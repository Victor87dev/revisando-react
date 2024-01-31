import React from "react";

const Saudacao = ({ nome })=>{
     
    const gerarNome = (meuNome)=>{
        return `Olá, ${meuNome}, saudação`
    }

    return(
        <> {nome !== "" ?(
        <p>{gerarNome(nome)}</p>
        ): (
            <p>nada a retornar</p>
        )}
        </>
    )
}

export default Saudacao

