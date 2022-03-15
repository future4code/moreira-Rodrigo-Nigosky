import React from 'react';
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled, { createGlobalStyle } from "styled-components";
import LogotipoButton from './components/LogotipoButton/LogotipoButton';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;    
  }

  h2 {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;  
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  background-image: radial-gradient(circle at 50% 7.21%, #beffff 0, #87dcff 25%, #3cb5f2 50%, #0090d6 75%, #006fbd 100%); 
`;

const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`;

function App() {
  return (    
    <AppContainer>
      <GlobalStyle/>          
            <LogotipoButton
            texto="LABED"  
            imagem="https://tm.ibxk.com.br/2012/4/materias/2190810144856.jpg" 
            />          

        <PageSectionContainer>
          <h2>DADOS PESSOAIS</h2>
            <CardGrande 
              imagem="https://t.ctcdn.com.br/ZWcCw8h1Tb21HFga4dh3hA2NHkQ=/512x288/smart/i452046.png" 
              nome="RODRIGO N." 
              descricao="Me chamo RODRIGO, estudando Web Full Stack em busca de um lugar ao sol."
            />             
        </PageSectionContainer>

        <h2>DADOS DE CONTATO</h2>
        <div>
          <CardPequeno email={"rodrigo@rodrigo.com"} endereco={"SÃO PAULO/SP"} />
        </div>
                
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />    
        
        <PageSectionContainer>
          <h2>EXPERIENCIAS PROFISSIONAIS</h2>
            <CardGrande 
              imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eff3d7d4dba18a22ca203c8_Logo_Labenu_vertical.png" 
              nome="Labenu" 
              descricao="Estudante na LABENU em 2022" 
            />
        
            <CardGrande 
              imagem="https://images.sympla.com.br/5f7b507045f7e.png" 
              nome="UNIVERSIDADE ANHEMBI-MORUMBI" 
              descricao="Graduado em turismo em 2004." 
            />
        </PageSectionContainer>

        <PageSectionContainer>
          <h2>COMPETÊNCIAS</h2>
            <CardGrande 
              imagem="https://www.novida.com.br/wp-content/uploads/2020/03/Matriz-de-Competencias.png"
              nome="Gestão de projetos"  
              descricao="Inovação e criatividade" 
              
            />        
            
        </PageSectionContainer>

      <PageSectionContainer>
        <h2>MINHAS REDES SOCIAIS</h2>
          <ImagemButton 
            imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
            texto="Facebook" 
          />
          <ImagemButton 
            imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
            texto="Twitter" 
          />
      </PageSectionContainer>      
    </AppContainer>
  );
}

export default App;