import React, { useEffect, useState } from 'react'
import "./effects.css"
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: "",
        email: "",
    });

    const {email, name} = formState;

    const handleInputChange = ({target}) =>{
        setformState({
            ...formState,
            [target.name]: target.value
            
        });
    }

    useEffect(() => {
       // console.log("Hey OH ");
    },[name])


    return (
        <>
        <h1>useEffect</h1>
        <hr/>

        <div>
        <input
        type ="text"
        name = "name"
        placeholder = "tu nombre"
        autoComplete = "off"
        className ="form-control"
        value = {name} 
        onChange = {handleInputChange}
        ></input>

        </div>
        <div>
        <input
        type ="text"
        name = "email"
        placeholder = "tu email"
        autoComplete = "off"
        className ="form-control"
        value = {email} 
        onChange = {handleInputChange}
        ></input>
        </div>

        {(name === "123") && <Message />}

        </>
    )
}
