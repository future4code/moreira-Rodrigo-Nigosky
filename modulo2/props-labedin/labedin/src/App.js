import React from 'react';
import './App.css';npm 
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://t.ctcdn.com.br/ZWcCw8h1Tb21HFga4dh3hA2NHkQ=/512x288/smart/i452046.png" 
          nome="RODRIGO N." 
          descricao="Me chamo RODRIGO, estudando Web Full Stack em busca de um lugar ao sol."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

        <div className="page-section-container">
        <h2>Contato e Endereço</h2>
        <CardPequeno
          imagem="https://www.penso.com.br/wp-content/uploads/2017/10/mail-2048128_1920.png" 
          nome="FORMAS DE CONTATO" 
          descricao="rodrigo@rodrigo.com.br"
        />
                
      </div>

      <div className="page-section-container">
          <CardPequeno
          imagem="https://cloudo3.com/ArticleIMG/image-0724065659196.jpg" 
          nome="ENDEREÇO" 
          descricao="SÃO PAULO - SP, BRAZIL"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
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
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
