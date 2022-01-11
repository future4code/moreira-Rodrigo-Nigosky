import React from 'react';
import './ImagemButtonStyled.js'
import ImageButtonContainer from "./ImagemButton"


function ImagemButton(props) {
    return (
        <ImageButtonContainer>
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImageButtonContainer>

    )
}

export default ImagemButton;