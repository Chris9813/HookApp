import React from 'react'
import { shallow } from "enzyme"
import { MemoHook } from "../../06-memos/MemoHook"


describe('pruebas con la alicacion MemoHooks', () => {
const wrapper = shallow(<MemoHook />)

test('debe mostrar la info correctamente ', () => {
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find("h2").text().trim() ).toBe("counter 5")
})

test('should ', () => {
    wrapper.find(".btn").simulate("click")
    expect( wrapper.find("h2").text().trim() ).toBe("counter 6")
})

})
