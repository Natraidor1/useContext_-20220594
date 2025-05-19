import React from "react";
import {Navigate, Outlet, outlet} from "react-router-dom";
import {useAuth} from "../context/AuthContext"


const privateRoute = () =>{
    const {isLoggedIn} = useAuth
    //si el usuario no esta identificado, redirige a la pagina de inicio
    return isLoggedIn ? <Outlet/> : <Navigate to= "/"/>
}

export default privateRoute;