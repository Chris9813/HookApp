import { act, renderHook } from '@testing-library/react-hooks'
import React from 'react'
import { useForm } from '../../../hooks/useForm'

describe('pruebas en useForm', () => {
    const initialForm = {
        name: "queti",
        email: "mPorta",
    }
    test('debe regresar un formulario por defecto ', () => {
        const {result} = renderHook(() => useForm(initialForm))
        const [formValues, handleInnputChange, reset] = result.current;
        expect(formValues).toEqual(initialForm)
        expect (typeof handleInnputChange).toBe("function")
        expect (typeof reset).toBe("function")
    })


    test('debe cambiar el valor del name ', () => {
        const {result} = renderHook(() => useForm(initialForm))
        const [, handleInnputChange] = result.current;
        act (() => {
            handleInnputChange({target: {
                name: "name",
                value: "Chris"
            }})
        })
        const [ formValues ] = result.current;
        expect ( formValues ).toEqual({...initialForm, name: "Chris"})
    })
    


    test("debe restaurar el formulario por defecto", () => {
        const {result} = renderHook(() => useForm(initialForm))
        const [, handleInnputChange, reset] = result.current;
        act(() => {
            handleInnputChange({target: {
                name: "name",
                value: "Chris"
            }})
            reset();
        })
        const [formValues] = result.current;
        expect( formValues ).toEqual(initialForm);
    })
    
    
})

