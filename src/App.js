import React, {useState} from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./Components/GlobalStyle";
import { temaClaro, temaEscuro } from "./Components/UI/temas"

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

function App() {

  function share(){
    if(navigator.share){
      navigator.share({
        title: "sejfgse",
        text: "sdfgh",
        url: window.location.href
      })
      .then(()=> console.log("sucess"))
      .catch((error)=> console.log("error:", error))
    }else{
      console.log("Share not suported")
    }
  }

  const [ tema, setTema ] = useState(true)

  const toggleTema = ()=>{
      setTema(tema=> !tema)
  }

  return (
    <>
      <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
        <GlobalStyle/>
        <BtnTema onClick={toggleTema}>
          <SwitcherTema tema={tema}/>
        </BtnTema>
        <button onClick={share}>share</button>
        <Cabecalho />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
