import React from 'react';
import styled from 'styled-components'

const AppContainer = styled.div`
  border: 1px solid black;
  height: 100vh;
  box-sizing: border-box;
  width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
`

const MessagesContainer = styled.div`
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
`

const InputsContainer = styled.div`
  display: flex;
`

const NameInput = styled.input`
  width: 100px;
`

const MessageInput = styled.input`
  flex-grow: 1;
`

class Whatslab extends React.Component {
  state = {
    pessoas: [],    
    valorInputPessoa: "",
    valorInputMensagem: ""
  };
  
  onChangeInputPessoa = (event) => {
        this.setState({ valorInputPessoa: event.target.value });
  };

  onChangeInputMensagem = (event) => {
        this.setState({ valorInputMensagem: event.target.value });
  };

  onClickEnviar = () => {    
    const novaPessoa = {
      usuario: this.state.valorInputPessoa,
      mensagem: this.state.valorInputMensagem  
    };

    const novoPessoas = [...this.state.pessoas, novaPessoa];

    this.setState({ pessoas: novoPessoas, valorInputMensagem:'' });
  };

  render() {
       return (
        <AppContainer>
        <MessagesContainer>
          {this.state.pessoas.map((message, index) => {
            return <p key={index}>
              <strong>{message.usuario}</strong>: {message.mensagem}
            </p>
          })}
        </MessagesContainer>
        <InputsContainer>
          <NameInput
            value={this.state.valorInputPessoa}
            onChange={this.onChangeInputPessoa}
            placeholder={"Usuário"}
          />
          <MessageInput
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder={"Mensagem"}
          />
          <button onClick={this.onClickEnviar}>Enviar</button>
          </InputsContainer>
          </AppContainer>       
    );
  }
}

export default Whatslab;