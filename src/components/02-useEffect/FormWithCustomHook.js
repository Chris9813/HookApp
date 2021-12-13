import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import "./effects.css"


export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: "",
        email: "",
        password: "",
    });

    const {email, name, password} = formValues;

    useEffect(() => {
    console.log("email cambio");
    }, [email])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form className="form-group"
        onSubmit = {handleSubmit}
        >
        <h1>FormWithCustomHook</h1>
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

        <div>
        <input
        type ="password"
        name = "password"
        placeholder = "*****"
        className ="form-control"
        value = {password} 
        onChange = {handleInputChange}
        ></input>
        </div>

        <button
        type = "submit"
        className ="btn btn-primary"
        >submit</button>

        </form>
    )
}
