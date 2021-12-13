import { act } from '@testing-library/react'
import { mount, shallow } from 'enzyme'
import React from 'react'
import { TodoApp } from '../../08-useReducer/TodoApp'
import { demoTodos } from '../fixtures/demoTodos'


describe("", () => {

    Storage.prototype.setItem = jest.fn()

    const wrapper = shallow(<TodoApp />)

    test('should ', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe agregar un todo ', () => {
        const wrapper = mount( <TodoApp />)
        act(() => {
            wrapper.find("Tododd").prop("handleAddTodo")(demoTodos[0])
            wrapper.find("Tododd").prop("handleAddTodo")(demoTodos[1])
        })
        expect(wrapper.find("h1").text().trim()).toBe("Todos App: 2")
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    })
    
    test('debe llamar un todo ', () => {
        wrapper.find("Tododd").prop("handleAddTodo")(demoTodos[0])
        wrapper.find("TodoList").prop("handleDelete")(demoTodos[0].id)
        expect(wrapper.find("h1").text().trim()).toBe("Todos App: 0")
    })

})