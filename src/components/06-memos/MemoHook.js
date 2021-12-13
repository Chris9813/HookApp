import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import "../02-useEffect/effects.css";
import { procesoPesado } from '../helpers/procesoPesado';


export const MemoHook = () => {

const [show, setshow] = useState(true)
const {counter, increment} = useCounter(5)
const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ])

return (
    <div>
        <h1>MEMO HOOK</h1>
        <h2>counter { counter }</h2>
        <hr/>
        <p>numero de iteraciones {memoProcesoPesado} </p>
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
