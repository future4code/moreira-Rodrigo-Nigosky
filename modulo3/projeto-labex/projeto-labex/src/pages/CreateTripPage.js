import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";

const useProtectedPage = () => {
    const navigate = useNavigate()
    
    useEffect (() => {
        const token = localStorage.getItem("token");

        if (token === null) {
            console.log ('Não está logado!!!')
            navigate('/login')
        }
    }, [])
}

export const CreateTripPage = () => {

    useProtectedPage()

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    } 
    
    const {form, onChange, cleanFields} = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    });

    const cadastrar = (event) => {
        event.preventDefault()
        console.log ("Formulario enviado!", form);
        cleanFields();
    };

    return (
        <div>
            <h1>CREATE TRIP</h1>
            <form onSubmit={cadastrar}>
                <input 
                    name={"name"} 
                    value={form.name} 
                    onChange={onChange} 
                    placeholder = "Nome"
                    required
                    pattern={"^.{5,}"}
                    title={"Seu nome deve ter no mínimo 5 letras"}
                />
                <input 
                    name={"planet"} 
                    value={form.planet} 
                    onChange={onChange} 
                    placeholder = "Escolha um Planeta"
                    required
                />
                <input 
                    name={"date"} 
                    value={form.date} 
                    onChange={onChange} 
                    placeholder = "dd/mm/aaaa"
                    required
                    type={"date"}                    
                />
                <input 
                    name={"description"} 
                    value={form.description} 
                    onChange={onChange} 
                    placeholder = "Descrição"
                    required
                    pattern={"^.{30,}"}
                    title={"Sua descrção deve ter no mínimo 30 caracteres"}
                />
                <input 
                    name={"durationInDays"} 
                    value={form.durationInDays} 
                    onChange={onChange} 
                    placeholder = "Duração em dias"
                    required
                    type={"number"}
                    pattern={"^.{50,}"}
                    title={"Duração mínima 50 dias"}
                    min ={50}
                />
                <button>ENVIAR</button>
            </form>
            <p>
                <button onClick = {goBack}>VOLTAR</button>
            </p>
        </div>
    ) 
}