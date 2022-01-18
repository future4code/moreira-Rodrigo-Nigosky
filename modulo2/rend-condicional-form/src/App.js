import React from "react";
import Etapa1 from './components/etapa1';
import Etapa2 from './components/etapa2';
import Etapa3 from './components/etapa3';
import Final from './components/final';

export default class App extends React.Component {

  state = {
    telaAtual: 1
  };

irParaEtapa2 = () => {
  this.setState({ telaAtual: this.state.telaAtual + 1 })};
  
  render() {
    const renderizaTelaCorreta = () => {
        switch (this.state.telaAtual) 
        {
        case 1 : return <Etapa1/>;  
        case 2 : return <Etapa2/>; 
        case 3 : return <Etapa3/>;  
        default: return <Final/>  
      }
    }

    return (
      <div>
        {
          renderizaTelaCorreta()
        }
         <button onClick={this.irParaEtapa2}>Enviar</button>
      </div>
    )
  }
}

