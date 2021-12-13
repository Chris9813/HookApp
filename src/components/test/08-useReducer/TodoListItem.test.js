import { shallow } from 'enzyme'
import React from 'react'
import { TodoListItem } from '../../08-useReducer/TodoListItem'
import { demoTodos } from '../fixtures/demoTodos'


describe("Pruebas en TodoLisItem", () => {

    const handleDelete = jest.fn()
    const handleToggle = jest.fn()

    const wraper = shallow(<TodoListItem 
    todo = {demoTodos[0]}
    index = {0}
    handleDelete = {handleDelete}
    handleToggle = {handleToggle}
    />)

    test('debe mostrarse correctamnete ', () => {
        expect(wraper).toMatchSnapshot();
    })

    test('debe llamar a la funcion handleDelete ', () => {
        wraper.find("button").simulate("click")
        expect(handleDelete).toHaveBeenCalledWith(1);
    })
    
    test('debe llamar a la funcion handleToggle ', () => {
        wraper.find("p").simulate("click")
        expect(handleToggle).toHaveBeenCalledWith(1);
    })

    test('debe llamar mostrar correctamente el parrafo ', () => {
        const p = wraper.find("p")
        expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc}`)
    })

    test('debe tener a case complete si esta completo', () => {
        
        const todo = demoTodos[0]
        todo.done = true

        const wraper = shallow(<TodoListItem 
            todo = {todo}
            />)
        expect( wraper.find("p").hasClass("complete") ).toBe(true)
    })
    
    
    
    
})