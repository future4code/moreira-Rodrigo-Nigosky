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

state = {

  posts: [ 
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
};

  render() {

        const listaDePosts = this.state.posts.map((post) => {
    
    return (
      <Post
      nomeUsuario = {post.nomeUsuario}
      fotoUsuario = {post.fotoUsuario}
      fotoPost = {post.fotoPost}
      />
    );
    });

  return ( 
      <MainContainer>
  <h1>Insta4</h1>
  {listaDePosts}  
  </MainContainer>
)
}
}

export default App;
