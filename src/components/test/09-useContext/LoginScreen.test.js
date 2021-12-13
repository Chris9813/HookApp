import { mount } from 'enzyme'
import React from 'react'
import { LoginScreen } from '../../09-useContext/LoginScreen'
import { UserCotext } from '../../09-useContext/UserContext'

describe('prueba sobre el Login Screen', () => {
    
    const setuser = jest.fn()

    const wrapper = mount(
    <UserCotext.Provider value = {{
        setuser
    }}
    >
        <LoginScreen />
    </UserCotext.Provider>
    )

    test('debe mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe ejecutar el setUser con el argumento esperado ', () => {
        wrapper.find("button").prop("onClick")();
        expect(setuser).toHaveBeenCalledWith({
            id: 123,
            name: "Christian"
        })
    });
    
})
