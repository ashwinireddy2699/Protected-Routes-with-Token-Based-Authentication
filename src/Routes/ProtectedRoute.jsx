import React from 'react'
import { useContext,useState } from 'react'
import { AuthContext } from '../Context/AuthContext/Auth'
import { Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import styles from '../styles/pages.module.css'


function ProtectedRoute({children}) {
      const {jwttoken} =useContext(AuthContext)
    return (
        <div className={styles.pages}>
            {jwttoken?children:<Navigate to={'/Login'}/>}

        </div>
    )
}

export default ProtectedRoute
