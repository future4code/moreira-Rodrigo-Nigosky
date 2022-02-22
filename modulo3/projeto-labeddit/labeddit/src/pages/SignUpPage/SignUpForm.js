import React from "react";
import {InputsContainer, SignUpFormContainer } from "./styled";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/user";

const SignUpForm = () => {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({name: "", email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, navigate)
    }

    return (        
        <form onSubmit={onSubmitForm}>
            <SignUpFormContainer>
                <InputsContainer>
                    <TextField 
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        label={"Nome"} 
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required                            
                         autoFocus                       
                    />
                    <TextField 
                         name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"} 
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}                                                   
                    />
                    <TextField 
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"} 
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}                              
                    />
                </InputsContainer>
                    <Button
                        color={"primary"}
                        variant={"contained"}
                        type={"submit"}
                        fullWidth
                    >
                      Fazer cadastro
                    </Button> 
            </SignUpFormContainer>                         
        </form>                    
                                                
    )
}

export default SignUpForm