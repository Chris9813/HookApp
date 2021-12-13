import React from 'react'
import { renderHook, act } from "@testing-library/react-hooks"
import { useFetch } from '../../../hooks/useFetch'

describe("pruebas en useFeth", () => {
    
    test('debe retornar la informacion por defecto ', () => {
        const {result} = renderHook(() => useFetch("https://www.breakingbadapi.com/api/quotes/1"))
        const {data, loading, error} = result.current
        expect( data ).toBe(null)
        expect( loading ).toBe(true)
        expect( error ).toBe(null)
    })
    
    test('debe retonar la info deseada ', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFetch("https://www.breakingbadapi.com/api/quotes/3"))
        await waitForNextUpdate({timeout:5000});
        const {data, loading, error} = result.current

        expect( data.length ).toBe(1)
        expect( loading ).toBe(false)
        expect( error ).toBe(null)
    })

    test('debe manejar el error', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFetch("https://reqres.in/apid/users?page=2"))
        await waitForNextUpdate({timeout:5000});
        const {data, loading, error} = result.current

        expect( data ).toBe(null)
        expect( loading ).toBe(false)
        expect( error ).toBe("No se puedo cargagr la info, revisa el internet perra")
    })
    

})