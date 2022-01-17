import './App.css';
import React from "react";

export default class Etapa2 extends React.Component {

render () {

  return(
    <div className="wrapper">
      <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
      
      <form>
      <fieldset>
         <label>
           <p>5.Qual curso?</p>
           <input curso="curso" />
         </label>
       </fieldset>

       <fieldset>
         <label>
           <p>6.Qual a unidade de ensino?</p>
           <input unidade="unidade" />
         </label>
       </fieldset>  
       
       <button type="submit">Enviar</button>
      </form>

    </div>
  )
}
}
