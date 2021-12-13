import { mount, shallow } from 'enzyme'
import React from 'react'
import { HomeScreen } from '../../09-useContext/HomeScreen'
import { UserCotext } from '../../09-useContext/UserContext'


describe('pruebas en HomeSCreen', () => {

    const user = {
        name: "Chris",
        email: "sada"
    }
    const wrapper = mount(
    <UserCotext.Provider value = {{
        user
    }}>
        <HomeScreen /> 
    </UserCotext.Provider>
        
    )

    test('debe mostrarse corectamente ', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
