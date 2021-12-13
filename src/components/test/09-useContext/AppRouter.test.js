import { mount } from 'enzyme'
import React, { PureComponent } from 'react'
import { AppRouter } from '../../09-useContext/AppRouter'
import { UserCotext } from '../../09-useContext/UserContext'

describe('Prueba en AppRouter', () => {
    const user = {
        id: 1,
        name: "Chris"
    }

    const wrapper = mount(
    <UserCotext.Provider value = {{
        user
    }}
    
    >
        <AppRouter />
    </UserCotext.Provider>
    
    
    )

    test('debe de mostrrse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    })

    
    
})
