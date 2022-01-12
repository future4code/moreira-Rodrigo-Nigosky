import styledComponents from "styled-components";

export const BigcardContainer = styledComponents.div`
    
    display: flex;
    align-items: center;
    border: 10px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 150px;
    background-image: linear-gradient(to right, rgba(210, 238, 210), rgba(158, 158, 126));
`

export const BigcardContainer > img = styledComponents.div`
    width: 90px;
    margin-right: 10px;
    border-radius: 50%;
    `

export const BigcardContainer h4 = styledComponents.div`
    margin-bottom: 15px;
    `

export const BigcardContainer > div = styledComponents.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    `