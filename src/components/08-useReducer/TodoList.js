import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleDelete, handleToggle}) => {

    return (
        <ul className ="list-group list-group-flush">
                {
                todos.map((todo, i) =>(
                    <li
                    key = {todo.id}>
                        <TodoListItem 
                        todo = {todo}
                        index = {i}
                        handleDelete = {handleDelete}
                        handleToggle = {handleToggle}
                        />
                    </li>
                ))
                }
        </ul>)
}

/* 
todo = {todo}
            index = {index}
            handleDelete = {handleDelete}
            handleToggle = {handleToggle}
            />
*/
