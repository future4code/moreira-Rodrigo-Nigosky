import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
        return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'fernanda'}
          fotoUsuario={'https://cdn-icons-png.flaticon.com/512/17/17004.png'}
          fotoPost={'https://picsum.photos/200/250'}
        />
        <Post
          nomeUsuario={'thiago'}
          fotoUsuario={'https://static.vecteezy.com/ti/vetor-gratis/p1/2318271-icone-do-perfil-do-usuario-gr%C3%A1tis-vetor.jpg'}
          fotoPost={'https://picsum.photos/300/150'}
        />
      </MainContainer>
    );
  }
}



export default App;
