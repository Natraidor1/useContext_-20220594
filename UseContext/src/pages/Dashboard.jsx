import React from "react";
import "../css/Dashboard.css"
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard =()=>{
    const navigate = useNavigate(); 
    const {user, logOut}= useAuth();

    const handleLogout =()=>{
        if(logOut()){
            navigate("/");
        }
    };

    return(
        <div className="dashboard-container">
            <div className="dashboard-card">
                <h1 className="dashboard-title">Bienvenido al DashBoard</h1>
                <p className="dashboard-user">
                    Hola <span>{user || "Usuario logeado"}</span>
                </p>
                <button className="dashboard-button" onClick={handleLogout}>Cerrar sesion </button>
            </div>
        </div>
    );
};