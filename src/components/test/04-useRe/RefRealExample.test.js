import { shallow } from 'enzyme'
import React from 'react'
import { RefRealExample} from '../../04-useRef/RefRealExample'

describe("pruebas en RefRealExample", () => {

    const wrapper = shallow(<RefRealExample />)

    test('debe mostrrse correctamente ', () => {
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find("MultipleCustomHooks").exists()).toBe(false)
    })
    
    test('debe mostrar la info', () => {
        wrapper.find("button").simulate("click")
        expect( wrapper.find("MultipleCustomHooks").exists()).toBe(true)
    })
    
/*
    const wrapper =  shallow(<RefRealExample />)
    test('debe mostrarse correctamente ', () => {
        expect( wrapper ).toMatchSnapshot();
        expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false)
    })

    test('debe mostrar el componente  MultipleCustomHooks', () => {
        wrapper.find("button").simulate("click")
        expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true)
    })
*/

}) 
