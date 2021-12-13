import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm'
import { todoReducer } from './todoReducer'
import "./styles.css"
import { TodoList } from './TodoList'
import { Tododd } from './Tododd'




export const TodoApp = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem("todos")) ||  [] 
    }

    const [todos, dispatch] = useReducer(todoReducer,  [], init )
    

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const handleDelete = (todoId) => {
        
        const action = {
            type: "delete",
            payload: todoId,
        }
        dispatch(action)
    }
    
    const handleToggle = (todoId) => {
    dispatch({
        type: "toggle",
        payload: todoId
    })
    }

    const handleAddTodo = (newTodo) => {

    dispatch({
        type: "add",
        payload: newTodo,
    })
    }

    

    return (
        <div>
        <h1>Todos App: {todos.length}</h1>
        <hr/>
        <div className = "row">
        <div className = "col-7">
        
        < TodoList 
        todos = {todos}
        handleDelete = {handleDelete}
        handleToggle = {handleToggle}
        />

        </div>
        
        <div className = "col-5 text-center">
            <Tododd 
            handleAddTodo = {handleAddTodo}
            />

        </div>
        
        </div>
        
        </div>
    )

}



/*
const init = () => {

    return JSON.parse(localStorage.getItem("todos")) ||  [] 

}
export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)
    const [{description}, handleInnputChange, reset] = useForm({
        description: ""
    })

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    console.log(description);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if(description.trim().length < 1){
            return;
        }
        const newTodo = {
        id: new Date().getTime(),
        desc: description,
        done: false
        } 
        const action = {
            type: "add",
            payload: newTodo
        }
        dispatch( action );
        reset();
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>
            <div className ="row">
                <div className="col-7">
                <ul className ="list-group list-group-flush">
                {
                    todos.map((todo, i) => (
                    <li
                    key = {todo.id}
                    className = "list-group-item"
                    >
                    <p
                    className = "text-center"
                    >{i + 1}. {todo.desc}</p> 
                    
                    <button
                    className = "btn btn-danger"
                    >
                        Borrar
                    </button>
                    </li>
                    ))
                }
            </ul>
            </div>
            <div className ="col-5">
                    <h4>Agregar Todo</h4>
                    <hr/>
                    <form
                    onSubmit = {handleSubmit}
                    >
                        <input
                        type= "text"
                        name = "description"
                        placeholder = "Aprender.."
                        autoComplete = "off"
                        className ="form-control"
                        onChange = {handleInnputChange}
                        value = {description}
                        >
                        </input>
                        <button
                        type = "submit"
                        className= "btn btn-outline-primary mt-2 btn-block"
                        >
                        Agregar
                        </button>
                    </form>
            </div>
            </div>
            
        </div>
    )
}
*/