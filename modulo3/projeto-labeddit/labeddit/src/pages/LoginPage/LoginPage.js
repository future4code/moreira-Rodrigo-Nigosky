import React from "react";
import {ScreenContainer, LogoImage, SignUpButtonContainer} from "./styled";
import { Button } from "@mui/material";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { goToSignUpPage } from "../../routes/coordinator";
import logo from "../../assets/logo.png";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = () => {   
    useUnprotectedPage()
    const navigate = useNavigate()
    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <h1>LOGIN PAGE</h1>
            <LoginForm/>
            <SignUpButtonContainer>
                    <Button
                        onClick={() => goToSignUpPage(navigate)}
                        type={"submit"}
                        fullWidth
                        variant={"text"}
                        color={"primary"}                        
                    >
                        Não possui conta? Cadastre-se
                    </Button>
            </SignUpButtonContainer>                       
        </ScreenContainer>
    )
}

export default LoginPage