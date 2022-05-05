import React,{useState} from 'react'
import {  Navigate, Outlet} from 'react-router-dom'
import jwt_decode from "jwt-decode";
import { useSelector } from 'react-redux' 
import SignIn from '../pages/auth/SignIn'

const PrivateRoute = () => {
    
    let [user, setUser] = useState(()=> localStorage.getItem('access_token') ? jwt_decode(localStorage.getItem('access_token')) : null)

    return(
       <div>
           {
             user? <Outlet/>: <Navigate to="signin"/> 
           }
       </div>
    )
}

export default PrivateRoute;