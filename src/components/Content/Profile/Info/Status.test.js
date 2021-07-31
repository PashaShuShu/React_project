import React from 'react';
import { create } from 'react-test-renderer'
import Status from './StatusButOnHooks'

describe("ProfileStatus component", () =>{
    test("status from props should be in the state", () =>  {
        const component = create(<Status status="SSSSSSSSS" />);
        const instance = component.getInstance();
        expect(instance.status).toBe("SSSSSSSSS");
    })
})