import React from 'react'

export const TodoListItem = ({todo, index, handleDelete, handleToggle}) => {
    return (
        <div>
            <p
            className = {`${todo.done && "complete"}`}
            onClick = {() => handleToggle(todo.id)}
            >{index+1}. {todo.desc}</p>
            <button 
            key = {todo.id}
            className = "btn btn-danger"
            onClick = {() => handleDelete(todo.id)}
            > Borrar</button>
        </div>
    )
}
