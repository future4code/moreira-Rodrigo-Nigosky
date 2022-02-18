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

export const AdminHomePage = () => {

    useProtectedPage()

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const goToCreateTripPage = () =>{
        navigate("/create")
    }

    const goToTripDetailsPage = () =>{
        navigate("/trips")
    }


    return (
        <div>
            <h1>ADMIN PAGE</h1>
            <p>
                <button onClick = {goBack}>VOLTAR</button>
                <button onClick = {goToCreateTripPage}>Ir para Create Trip</button>
                <button onClick = {goToTripDetailsPage}>Ir para Trip Details</button>
            </p>
        </div>
    ) 
}
