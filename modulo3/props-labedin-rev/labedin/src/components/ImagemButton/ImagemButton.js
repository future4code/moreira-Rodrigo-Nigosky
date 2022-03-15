import React from "react";
import styled from "styled-components";

const ImageButtonContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 50px;
  width: 200px;
  padding: 15px 30px;
  margin: 10px auto;
`;

const ButtonImage = styled.img`
  width: 30px;
  margin-right: 10px;
`;

function ImagemButton(props) {
  return (
    <ImageButtonContainer>
      <ButtonImage src={props.imagem} />
      <h4><p>{props.texto}</p></h4>
    </ImageButtonContainer>
  );
}

export default ImagemButton;