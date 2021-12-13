import React, {useContext} from 'react'
import { UserCotext } from './UserContext'

export const HomeScreen = () => {

    const {user} = useContext(UserCotext)
    console.log(user);
    return (
        <div>
            <h1>Home Screen</h1>
            <hr/>
            <div>
                <pre>
                    {JSON.stringify(user, null, 3)}
                </pre>
            </div>
        </div>
    )
}

