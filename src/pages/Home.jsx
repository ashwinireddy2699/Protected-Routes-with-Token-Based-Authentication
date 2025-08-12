import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext/Auth'


function Home() {
    const {success, setsucessmessage}=useContext(AuthContext)
    useEffect(()=>{
        if(success){
            setTimeout(() => {
                setsucessmessage("")
            }, 1000);
        }

    },[success])
    return (
        <div className={styles.Home}>
            <h1>Welcome to home</h1>
            {success && <div className={styles.successMessage}>{success}</div>}
        </div>
    )
}

export default Home
