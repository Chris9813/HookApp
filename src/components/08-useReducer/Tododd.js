import React from 'react'
import { useForm } from '../../hooks/useForm'



export const Tododd = ({handleAddTodo}) => {

    const [{description}, handleInnputChange, reset] = useForm({
        description: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <= 1){
            return;
        }
        const newTodo = {
        id: new Date().getTime(),
        desc: description,
        done: false,
        }
        handleAddTodo(newTodo);
        reset()
        }

    return (
        <>
                <h4>Agregar TODO</h4>
            <hr/>
            <form onSubmit = {handleSubmit}>
            <input
            placeholder = "Agregar elemento"
            type ="text"
            autoComplete = "off"
            className = "form-control"
            name = "description"
            value = {description}
            onChange = {handleInnputChange}
            ></input>
            <div className = "d-grid gap-2">
            <button
            type = "submit"
            className = "btn btn-outline-primary mt-3"
            >Enviar</button>
            </div>
            
        </form>
        </>
    )
}
