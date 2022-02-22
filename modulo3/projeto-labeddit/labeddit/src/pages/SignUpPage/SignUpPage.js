import React from "react";
import {ScreenContainer, LogoImage} from "./styled";
import logo from "../../assets/logo.png";
import SignUpForm from "./SignUpForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";



const SignUpPage = () => { 
    useUnprotectedPage()  
    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <h1>SIGNUP PAGE</h1>
            <SignUpForm/>                               
        </ScreenContainer>
    )
}

export default SignUpPage