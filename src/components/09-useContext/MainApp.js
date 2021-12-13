import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserCotext } from './UserContext'

export const MainApp = () => {

    const [user, setuser] = useState({})

    return (
        <UserCotext.Provider
        value = {{
            user,
            setuser
        }}
        >
            <AppRouter />
        </UserCotext.Provider>
    )

    /*
    const [user, setuser] = useState({})
    return (
        <UserCotext.Provider value = {{
            user,
            setuser
        }}>
            <AppRouter />
        </UserCotext.Provider>
        
    )
*/
}
