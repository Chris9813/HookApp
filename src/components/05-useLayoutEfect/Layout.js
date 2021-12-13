import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import "./layout.css"

export const Layout = () => {
    const {counter, increment}= useCounter(1)
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const {quote} = !!data && data[0];
    const [boxSize, setboxSize] = useState({})
    
    const Ptag = useRef()
    
    useLayoutEffect(() => {
        setboxSize(Ptag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr/>
            <blockquote className = "blockquote text-right">
                <p ref = {Ptag} 
                className="nb-0">{quote}</p>
                
            </blockquote>
            <button
            onClick={increment}
            className = "btn btn-primary"
            >
                Siguiente Quote
            </button>
            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

        </div> 
        )
}
