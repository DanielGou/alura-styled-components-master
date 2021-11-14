import React from "react";
import { Box, Botao } from "../UI";

import Itens from "../UI/Itens";
import { extratoLista } from "../../info"


const Extrato = () =>{
    return(
        <Box>
            {
                extratoLista.updates.map(({id, type, from, value, date})=>{
                    return(
                        <Itens key={id} type={type} from={from} value={value} date={date}></Itens>
                    )
                })
            }
            <Botao>Ver Mais</Botao>
        </Box>
    )
}

export default Extrato;