import styledComponents from "styled-components";
import ImageButtonContainer from "./ImagemButton"


export const ImageButtonContainer = styledComponents.div`
    display: flex;
    align-items: right;
    border: 10px solid pink;
    border-radius: 50px;
    width: 300px;
    padding: 15px 30px;
    margin: 10px auto;
    background-image: linear-gradient(rgb(0, 255, 136) , rgb(0, 255, 191));
`

export const ImageButtonContainer > img = styledComponents.div`
    width: 40px;
    margin-right: 10px;
`