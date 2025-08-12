import React from 'react'
import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext();


function Auth({ children }) {
    const [loading, setLoading] = useState(false);
    const [success, setsucessmessage] = useState("");
    const [errorMessage, setErrorMessage] = useState('')
    const [jwttoken, setjwt] = useState(() => localStorage.getItem('jwt') || null)
    const navigate = useNavigate()

    const login = (username, password) => {
        setLoading(true)
        setTimeout(() => {
            if (username == "ashwini" && password == "Ashwini@99") {

                const jwtmocktoken = { jwt: "ashwinireddyjwt@99", username: username }
                localStorage.setItem("jwt", JSON.stringify(jwtmocktoken))
                setjwt(jwtmocktoken.jwt)
                setsucessmessage("Successfully logged in!");

                setTimeout(() => {
                    navigate("/Home")
                }, 1200);
            } else {
                setErrorMessage("Enter valid credentials")
                setLoading(false)

            }
            setLoading(false)


        }, 2000);
    }

    const logout = () => {
        localStorage.removeItem('jwt'),
            setjwt(null),
            setErrorMessage(""),
            setsucessmessage("")
        navigate('/Login')
    }

    return (
        <AuthContext.Provider value={{ loading, errorMessage, jwttoken, login, logout, setErrorMessage, success, setsucessmessage }}>
            {children}

        </AuthContext.Provider>
    )
}

export default Auth
