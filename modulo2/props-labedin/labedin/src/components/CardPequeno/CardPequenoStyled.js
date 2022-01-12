import styledComponents from "styled-components";
import LittleCardContainer from "./CardPequenoStyled"


export const LittlecardContainer = styledComponents.div`
    display: flex;
    align-items: center;
    border: 10px solid rgb(37, 65, 223);
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 120px;
    background-image: linear-gradient(to right, rgba(210, 238, 210), rgba(158, 158, 126));
`

export const LittlecardContainer > img = styledComponents.div`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    `

export const littlecard-container h4 = styledComponents.div` 
    margin-bottom: 15px;
    `

export const LittlecardContainer > div = styledComponents.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
}