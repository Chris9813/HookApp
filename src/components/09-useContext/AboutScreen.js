import React, { useContext } from 'react'
import { UserCotext } from './UserContext'


export const AboutScreen = () => {


    const {user, setuser} = useContext(UserCotext)

    const handleClick = () => {
        setuser({})
    }

    return(
        <div>
            <h1>About Screen</h1>
            <hr/>
            <pre>
                {JSON.stringify(user, null , 3)}
            </pre>
            <button
            className = "btn btn-warning"
            onClick = {handleClick}
            >
                Logout
            </button>
        </div>
    )

    /*
    const {user, setuser} = useContext(UserCotext)

    const handleClick = () => {
        setuser({})
    }

    return (
        <div>
            <h1>About Screen</h1>
            <hr/>
            <pre>
                {JSON.stringify(user,null,3)}
            </pre>
            <button
            className = "btn btn-warning"
            onClick = {handleClick}
            >
            Logout
            </button>
        </div>
    )
*/
}
