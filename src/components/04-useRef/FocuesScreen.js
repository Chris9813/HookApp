import React, { useRef } from 'react'
import "../02-useEffect/effects.css"

export const FocuesScreen = () => {

    const inputRef = useRef();
    
    const handleClick = () => {
    inputRef.current.select();
    }
    
    return (
    <div>
        <h1>Focus Screen</h1>
        <input
        ref = {inputRef}
        className = "form-control"
        placeholder = "chinga tu madre"
        ></input>
        <button
        className = "btn btn-outline-primary  mt-5"
        onClick = {handleClick}
        >TOUCH ME!!
        </button>
    </div>
    )
}
