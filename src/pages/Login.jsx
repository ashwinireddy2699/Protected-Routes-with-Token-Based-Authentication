import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext/Auth'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/Login.module.css'


function Login() {
    const { login, jwttoken, loading, errorMessage, setErrorMessage } = useContext(AuthContext)

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password)

    }
    useEffect(() => {
        if (jwttoken) {
            navigate('/Home')
         
        }

    }, [jwttoken, navigate])

    useEffect(() => {
        setTimeout(() => {
            setusername("")
            setpassword("")
            setErrorMessage("")

        }, 1500);
    }, [errorMessage])


   

    return (
        <div className={styles.mainComponent}>
            <div className={styles.LoginComponent}>
                <div>
                    <h1>Login</h1>
                </div>
                <div>
                    <form onSubmit={handleSubmit} className={styles.formContainer}>
                        <div className={styles.loginContent}>

                            <div>
                                <input id='username' type='text' value={username} placeholder='Enter username' onChange={(e) => setusername(e.target.value)} autoComplete='off' />
                            </div>
                            <div>
                                <input id='password' type='text' value={password} placeholder='Enter password' onChange={(e) => setpassword(e.target.value)} autoComplete='off' />
                            </div>

                            <div>
                                <button type='submit' disabled={loading}>Login</button>
                            </div>
                            <div>
                                {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
                                

                            </div>
                            <div>
                                {loading && <div className={styles.loader}></div>}
                            </div>
                           

                        </div>


                    </form>
                </div>
            </div>

        </div>

    )
}

export default Login
