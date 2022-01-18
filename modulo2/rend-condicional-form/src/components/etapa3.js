import React from "react";

export default class Etapa3 extends React.Component {

  render () {
    
  return(
    <div className="wrapper">
      <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>

      <form>
      <fieldset>
         <label>
           <p>7.Por que você não terminou um curso de graduação?</p>
           <input fimcurso="fimcurso" />
         </label>
       </fieldset>

       <form>
      <fieldset>
         <label>
           <p>8.Tem curso de ingles?</p>
           <input ingles="ingles" />
         </label>
       </fieldset>
       </form>

       <fieldset>
         <label>
           <p>9.QVocê fez algum curso complementar?</p>
           <input complemento ="complemento" />
         </label>
       </fieldset>  
       
       
      </form>

    </div>
  )
}
}