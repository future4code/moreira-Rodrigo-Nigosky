import React from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    
    const navigate = useNavigate();

    const goToListTripPage = () =>{
        navigate("/list")
    }

    const goToLoginPage = () =>{
        navigate("/login")
    }

    return (
        <div>
            <h1>LABEX - HOME PAGE</h1>
            <p>
                <button onClick = {goToListTripPage}>Ir para List Trip</button>
                <button onClick = {goToLoginPage}>LOGIN</button>
            </p>
        </div>
    ); 
};