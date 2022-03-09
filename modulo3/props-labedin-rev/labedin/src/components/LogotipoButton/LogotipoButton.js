import React from "react";
import styled from "styled-components";

const LogotipoContainer = styled.div`
  display: flex;
  align-items: center;
  border: 10px solid black;
  border-radius: 0px;
  width: 220px;
  padding: 25px 20px;
  margin: 10px auto;
`;

const LogotipoImage = styled.img`
  width: 60px;
  margin-right: 20px;
`;

function LogotipoButton(props) {
  return (
    <LogotipoContainer>      
      <h1><p>{props.texto}</p></h1>
      <LogotipoImage src={props.imagem} />
    </LogotipoContainer>
  );
}

export default LogotipoButton;