import { AdminHomePage } from "./pages/AdminHomePage";
import { ApplicationFormPage } from "./pages/ApplicationFormPage";
import { CreateTripPage } from "./pages/CreateTripPage";
import { HomePage } from "./pages/HomePage";
import { ListTripsPage } from "./pages/ListTripsPage";
import { LoginPage } from "./pages/LoginPage";
import { TripDetailsPage } from "./pages/TripDetailsPage";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";


export default function App (){
  return (
    <Router>
      <Routes>
    
        <Route path = "/" element = {<HomePage />}/>
        
        <Route path = "/list" element = {<ListTripsPage />}/>
        
        <Route path = "/application" element = {<ApplicationFormPage />}/>
        
        <Route path = "/admin" element = {<AdminHomePage />}/>  
        
        <Route path = "/login" element = {<LoginPage />}/>

        <Route path = "/create" element = {<CreateTripPage />}/>       
        
        <Route path = "/trips" element = {<TripDetailsPage />}/>
        
      </Routes>
    </Router>

  );
}