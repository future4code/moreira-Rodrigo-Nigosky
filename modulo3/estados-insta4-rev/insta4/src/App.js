import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const arrayPosts = [
  {
    nomeUsuario:'paulinha',
    fotoUsuario:'https://picsum.photos/50/50',
    fotoPost:'https://picsum.photos/200/150'
  },
  {
    nomeUsuario: 'fernanda',
    fotoUsuario:'https://cdn-icons-png.flaticon.com/512/17/17004.png',
    fotoPost:'https://picsum.photos/200/250'
  },
  {
    nomeUsuario:'thiago',
    fotoUsuario:'https://static.vecteezy.com/ti/vetor-gratis/p1/2318271-icone-do-perfil-do-usuario-gr%C3%A1tis-vetor.jpg',
    fotoPost:'https://picsum.photos/300/150'
  }
]

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: lightblue
`

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 180px;
  width: 240px;
  border: 1px solid gray;
  margin: 20px;
  padding: 30px;
  background-color: lightgreen
`  

class App extends React.Component {
  state = {
      posts: arrayPosts,
      userName: "",
      userPhoto: "",
      postPhoto: ""
  }

  changeUserName = (event) => {
    this.setState({ userName: event.target.value });
  }

  changeUserPhoto = (event) => {
    this.setState({ userPhoto: event.target.value });
  }

  changePostPhoto = (event) => {
    this.setState({ postPhoto: event.target.value });
  }

  addNewPost = () => {
    const newPost = {
      nomeUsuario: this.state.userName,
      fotoUsuario: this.state.userPhoto,
      fotoPost: this.state.postPhoto
    }

    this.setState({
      posts: [...this.state.posts, newPost],
      userName: "",
      userPhoto: "",
      postPhoto: ""
    })
  }  

  render() {
    const componentesPost = this.state.posts.map((p) => {
      return (
        <Post
          nomeUsuario={p.nomeUsuario}
          fotoUsuario={p.fotoUsuario}
          fotoPost={p.fotoPost}
        />
      )
    })
    
    return (      
      <AppContainer>
      {componentesPost}        
        <FormContainer>
          <input
            placeholder={"Nome"}
            value={this.state.userName}
            onChange={this.changeUserName}
          />
          <input
            placeholder={"Foto"}
            value={this.state.userPhoto}
            onChange={this.changeUserPhoto}
          />
          <input
            placeholder={"Foto do Post"}
            value={this.state.postPhoto}
            onChange={this.changePostPhoto}
          />
          <button onClick={this.addNewPost}>POSTAR</button>
        </FormContainer>
      </AppContainer>
    )
  }
}

export default App;
