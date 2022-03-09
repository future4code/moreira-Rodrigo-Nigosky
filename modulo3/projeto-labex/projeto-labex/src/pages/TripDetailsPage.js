import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

export const TripDetailsPage = () => {

    useProtectedPage()

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    useEffect(() =>{
        const token = localStorage.getItem('token')
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/:id', {
            headers: {
                auth:token
            }
        })
            .then ((response) => {
                console.log(response.data)
            }).catch((error) => {
                console.log ('Deu erro: ', error.response)
            })
    }, [])

    return (
        <div>
            <h1>TRIP DETAILS</h1>
            <p>
                <button onClick = {goBack}>VOLTAR</button>
            </p>
        </div>
    ) 
}