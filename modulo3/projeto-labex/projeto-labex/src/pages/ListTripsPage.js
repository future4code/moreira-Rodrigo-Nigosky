import React from "react";
import { useNavigate } from "react-router-dom";

export const ListTripsPage = () => {  

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const goToApplicationFormPage = () =>{
        navigate("/application")
    }


    return (
        <div>
            <h1>LIST TRIP PAGE</h1>
            <p>
                <button onClick = {goBack}>VOLTAR</button>
                <button onClick = {goToApplicationFormPage}>Ir para Application Form</button>
            </p>
        </div>
    ) 
}