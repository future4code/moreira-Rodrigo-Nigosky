import React from 'react';
import './CardGrande.css'
import BigcardContainer from "./CardGrandeStyled"



function CardGrande(props) {
    return (
        <BigcardContainer>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
            </BigcardContainer>
    )
}

export default CardGrande;