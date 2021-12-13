import { todoReducer } from "../../08-useReducer/todoReducer";
import { demoTodos } from "../fixtures/demoTodos";



describe("debe retonar estado por defecto",() => {

    

    test('debe retornar valor por defecto', () => {
        const state = todoReducer(demoTodos, {})
        expect( state ).toEqual(demoTodos)
    })
    
    test('debe retornar valor por defecto', () => {
        const action =  {
            type: "add",
            payload: {nombre: "Hola Perras"}
        }
        const state = todoReducer(demoTodos, action)
        expect(state.length).toBe(3)
        expect( state ).toEqual([...demoTodos, action.payload])
    })

    test('debe borrar un TODO ', () => {
        const action =  {
            type: "delete",
            payload: 1,
        }

        const state = todoReducer(demoTodos, action)
        expect(state.length).toBe(1)
        expect(state).toEqual([demoTodos[1]])
        console.log(state);
    })

    test('debe actualizar done ', () => {
        const action =  {
            type: "toggle",
            payload: 1,
        }
        const state = todoReducer(demoTodos, action)
        expect(state[0].done).toBe(true)
        expect(state).not.toEqual(demoTodos)
        expect(state[1]).toEqual(demoTodos[1])
    })
    
})