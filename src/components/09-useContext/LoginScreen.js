import React, { useContext } from 'react'
import { UserCotext } from './UserContext'

export const LoginScreen = () => {


    const {setuser} = useContext(UserCotext)

    return(
        <div>
            <h1>Login Screen</h1>
            <hr/>
            <div>
                <button
                className = "btn btn-primary"
                onClick = {() => {setuser({
                    id: 123,
                    name: "Christian",
                })}}
                >
                    Login
                </button>
            </div>
        </div>
    )

    /*
    const {setuser} = useContext(UserCotext)

    return (
        <div>
        <div>
            <h1>Login Screen</h1>
            <hr/>
            <button
            className = "btn btn-primary"
            onClick = {() => setuser({
                id: 123,
                name: "Christian"
            })}
            >
                Login
            </button>
        </div>
        </div>
    )
*/
}
