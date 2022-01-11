import React from 'react';
import './CardPequenoStyled.js'
import LittleCardContainer from "./CardPequenoStyled"

function CardPequeno(props) {
    return (
        <LittleCardContainer>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
            </LittleCardContainer>
    )
}

export default CardPequeno;