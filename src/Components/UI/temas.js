import {
    fundoClaro, 
    textFundoClaro, 
    conteudoClaro, 
    fundoEscuro, 
    textoFundoEscurto, 
    conteudoEscuro
} from './viriaveis'

export const temaClaro = {
    body: fundoClaro,
    inside: conteudoClaro,
    text: textFundoClaro,
    filter: ''
}

export const temaEscuro = {
    body: fundoEscuro,
    inside: conteudoEscuro,
    text: textoFundoEscurto,
    filter: "invert(100%)"
}