import './App.css';
import React from "react";

class Whatslab extends React.Component {
  state = {

    pessoas: [     
    ],
    
    valorInputPessoa: "",
    valorInputMensagem: ""
  };

  onClickEnviar = () => {
    
    const novaPessoa = {
      usuario: this.state.valorInputPessoa,
      mensagem: this.state.valorInputMensagem  
    };

    const novoPessoas = [...this.state.pessoas, novaPessoa];

    this.setState({ pessoas: novoPessoas });
  };

  onChangeInputPessoa = (event) => {
        this.setState({ valorInputPessoa: event.target.value });
  };

  onChangeInputMensagem = (event) => {
        this.setState({ valorInputMensagem: event.target.value });
  };

  render() {
       const listaDeComponentes = this.state.pessoas.map((pessoa) => {
      return (
        <p>
          <b>{pessoa.usuario}</b>: {pessoa.mensagem}
        </p>
      );
    });

    return (
      <div>
        <h1>Whatslab</h1>
        <div>
          <input
            value={this.state.valorInputPessoa}
            onChange={this.onChangeInputPessoa}
            placeholder={"Usuário"}
          />
          <input
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder={"Mensagem"}
          />
          <button onClick={this.onClickEnviar}>Enviar</button>
        </div>
        <div>{listaDeComponentes}</div>
      </div>
    );
  }
}

export default Whatslab;