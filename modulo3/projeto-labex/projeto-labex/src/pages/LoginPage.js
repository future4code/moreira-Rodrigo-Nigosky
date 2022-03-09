import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import axios from "axios";

export const LoginPage = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }; 

    const {form, onChange, cleanFields} = useForm ({email: "", password: ""})

    const onSubmitLogin = (event) => {
        event.preventDefault()

        console.log(form);
        
        cleanFields();

        axios
            .post(
                'https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login', 
                form
        )
            .then((response) => {
                console.log('Deu certo: ', response.data.token);
                localStorage.setItem('token', response.data.token);
                navigate("/admin");
            })
            .catch((error) => {
                console.log ('Deu errado: ' , error.response);
            });            
    };    

    return (
        <div>
            <h1>LOGIN</h1>

                <form onSubmit={onSubmitLogin}>

                    <input
                        name="email"
                        placeholder="email"
                        type="email"
                        value ={form.email}
                        onChange ={onChange}
                        required                        
                        />

                    <input
                        name="password"
                        placeholder ="password"
                        type="password"
                        value={form.password}
                        onChange={onChange}
                        required
                        pattern={"^.{3,}"}
                        title={"Sua senha deve ter no mínimo 3 caracteres"}
                    />

                        <button>FAZER LOGIN</button>
                        
                </form>

             <p>                
                    <button onClick={goBack}>VOLTAR</button>                 
            </p>

        </div>       
    ) 
}