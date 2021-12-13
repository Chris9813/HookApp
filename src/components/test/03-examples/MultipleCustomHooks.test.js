import { shallow } from 'enzyme'
import React from 'react'
import { useCounter } from '../../../hooks/useCounter'
import { useFetch } from '../../../hooks/useFetch'
import { MultipleCustomHooks } from '../../03-examples/MultipleCustomHooks'


jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');




describe("Pruebas en MultipleCustomHook",() => {


beforeEach( () => {
    useCounter.mockReturnValue({
    counter: 10,
    increment: () => {}
    })
})

test('debe mostrarse correctamente ', () => {
    useFetch.mockReturnValue({
        data: null,
        loading: true,
        error: null,
    })
    const wrapper = shallow(<MultipleCustomHooks />)
    expect(wrapper).toMatchSnapshot();
})

test('debe mostrar la info ', () => {
    useFetch.mockReturnValue({
        data: [{
            author: "Chris",
            quote: "Hola perras"
        }],
        loading: false,
        error: null,
    })
    const wrapper = shallow(<MultipleCustomHooks />)
    expect(wrapper.find(".alert").exists()).toBe(false)
    expect(wrapper.find(".mb-0").text().trim()).toBe("Hola perras")
    expect(wrapper.find("footer").text().trim()).toBe("Chris")
})




    /*
    beforeEach( () => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        })
    })
    
    test('debe de mostrarse correctmente ', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true, 
            error: null,
        })
        const wrapper = shallow( <MultipleCustomHooks />)
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe mostrar la info ', () => {
        useFetch.mockReturnValue({
            data: [{
                author: "Chris",
                quote: "Hola mundo",
            }],
            loading: false, 
            error: null,
        })
        const wrapper = shallow( <MultipleCustomHooks />)
        expect (wrapper.find(".alert").exists()).toBe(false)
        expect (wrapper.find(".mb-0").text().trim()).toBe("Hola mundo")
        expect (wrapper.find("footer").text().trim()).toBe("Chris")
        console.log(wrapper.html());
})
*/
}
)
