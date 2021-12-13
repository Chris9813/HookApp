import React, { useState } from 'react'

import "../02-useEffect/effects.css"
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RefRealExample = () => {
    const [show, setshow] = useState(false)
    
    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr/>
            {show && <MultipleCustomHooks />}
            <button
            className = "btn btn-primary mt-5"
            onClick = {() => {
                setshow(!show)
            }}
            > MIRA/OCULTA EL CONTENIDO, PERRA!!
            </button>
            
        </div>
    )
}
