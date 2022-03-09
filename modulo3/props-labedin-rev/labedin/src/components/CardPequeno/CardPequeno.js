import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px 10px 10px;
  margin-bottom: 10px;
`;

const LineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const CardImage = styled.img`
  width: 30px;
  margin-right: 10px;
`;

function CardPequeno(props) {
  return (
    <CardContainer>
      <LineContainer>
        <CardImage
          src={
            "https://i.pinimg.com/originals/bb/18/bd/bb18bdbbef437b2d50518db5a8292c94.png"
          }
        />
        <p>{props.email}</p>
      </LineContainer>
      
      <LineContainer>
        <CardImage
          src={"https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-pin-map-graphic-icon-design-template-vector-illustration-png-image_1538447.jpg"}
        />
        <p>{props.endereco}</p>
      </LineContainer>
    </CardContainer>
  );
}

export default CardPequeno;