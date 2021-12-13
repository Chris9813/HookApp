import { act, renderHook } from '@testing-library/react-hooks';
import { shallow } from 'enzyme'
import React from 'react'
import { useForm } from '../../../hooks/useForm';
import { Tododd } from '../../08-useReducer/Tododd'


describe("pruebas en todoAdd",() => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <Tododd 
        handleAddTodo = {handleAddTodo}
        />
    )
test('debe mostrase correctamente ', () => {
    expect(wrapper).toMatchSnapshot();
})

test('NO debe de llamar appTodo ', () => {
    const formSubmit = wrapper.find("form").prop("onSubmit")
    formSubmit({preventDefault(){}})
    expect(handleAddTodo).toHaveBeenCalledTimes(0);
})

test('debe llamar la funcion handleAddTodo', () => {
    const input = wrapper.find("input")
    const value = "asdas"
    input.simulate("change", {target: {
        name: "description",
        value: value,
    }})
    wrapper.find("form").simulate("submit", {preventDefault(){}})
    expect(handleAddTodo).toHaveBeenCalled()
    expect(handleAddTodo).toHaveBeenCalledWith( expect.any(Object))
    expect(handleAddTodo).toHaveBeenCalledWith( {
        id: expect.any(Number),
        desc: value,
        done: false
    })
    expect(wrapper.find("input").prop("value")).toBe("")

})
})
