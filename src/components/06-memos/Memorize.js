import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import "../02-useEffect/effects.css";
import { Small } from './Small';

export const Memorize = () => {

    const [show, setshow] = useState(true)

    const {counter, increment} = useCounter(10)
    return (
        <div>
            <h1>counter <Small value = { counter }/></h1>
            <hr/>

            <button
            className ="btn btn-primary ml-3"
            onClick = {increment}
            >+1</button>

            <button
            onClick = {() => {
                setshow(!show)
            }}
            className= "btn btn-outline-primary ml-4"
            >Show/hide {JSON.stringify(show)}</button>
        </div>
    )
}
