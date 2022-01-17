import './App.css';
import React from "react";

export default class Etapa1 extends React.Component {
  
  render() {
      
    return(
    <div className="home">
      <h1>ETAPA 1: Dados gerais</h1>

      <form>
      <fieldset>
         <label>
           <p>1. Qual o seu nome?</p>
           <input nome="nome" />
         </label>
       </fieldset>

       <fieldset>
         <label>
           <p>2. Qual sua idade?</p>
           <input idade="idade" />
         </label>
       </fieldset>

       <fieldset>
         <label>
           <p>3. Qual seu email?</p>
           <input email="email" />
         </label>
       </fieldset>

       <fieldset>
         <label>
           <p>4. Qual a sua escolaridade?</p>
           <input escolaridade="escolaridade" />
           <option value="">--Escolha uma opção--</option>
               <option value="medio1">Ensino Médio Incompleto</option>
               <option value="medio2">Ensino Médio Completo</option>
               <option value="superior1">Ensino Superior Incompleto</option>
               <option value="superior2">Ensino Superior Completo</option>
         </label>
       </fieldset>
       
      </form>

    </div>
  )
}
    }