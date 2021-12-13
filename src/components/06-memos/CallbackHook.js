import React, { useCallback, useState } from 'react'
import "../02-useEffect/effects.css"
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
    const [counter, setcounter] = useState(10)
    
    
    const increment = useCallback( (num) => {
        setcounter(c => c + num)

    }, [ setcounter ])
    
    return (
        <div>
            <h1>use Callback Hook {counter}</h1>
            <hr/>
            <ShowIncrement increment = {increment} />

        </div>
    )
}
