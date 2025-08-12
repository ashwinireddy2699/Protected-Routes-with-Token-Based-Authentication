import React from 'react'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext/Auth'
import styles from '../styles/Navbar.module.css'

function Navbar() {
    const { logout, jwttoken } = useContext(AuthContext)
    return (
        <div>
            {jwttoken && (
            
                    <div className={styles.nav}>
                        <div className={styles.logo} >Logo</div>
                        <div className={styles.pages}>
                           <Link to={"/Home"}>Home</Link>
                           <Link to={'/Dashboard'}>Dashboard</Link>
                        </div>
                        <div className={styles.logout}>
                            <p onClick={() => { logout() }}>Logout</p>
                        </div>

                    </div>
            
            )}
        </div>

    )
}

export default Navbar
