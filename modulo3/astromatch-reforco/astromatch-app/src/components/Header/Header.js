import React from "react";
import {HeaderContainer} from "./styled"

function Header (props) {
    return(
        <HeaderContainer>            
            <button onClick={props.goToChooseProfilePage}>Escolher</button>
            <p>ASTROMATCH</p>
            <button onClick={props.goToMatchListPage}>Lista</button>       
        </HeaderContainer>
    )
}

export default Header