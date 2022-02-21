import React from "react";
import {HeaderContainer} from "./styled"

const Header = (props) =>{
    return(
        <HeaderContainer>
            <h2>ASTROMATCH</h2>
            <div>
                <button onClick = {() => props.changePage("astromatch")} >Home</button>
                <button onClick = {() => props.changePage("historico")} >Historico</button>
            </div>
        </HeaderContainer>
    )
}

export default Header