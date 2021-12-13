import { shallow } from "enzyme";
import { HookApp } from "../../HookApp";

describe("pruebas HookApp", () => {
    test('should ', () => {
        const wrapper = shallow(<HookApp />)
        expect(wrapper).toMatchSnapshot();
    })
    
})
