import createReactClass from 'create-react-class';
import React from 'react';

export const FormInput = createReactClass({
    displayName: "some form",
    someMethod() {
        console.log("some method called");
    },
    render() {
        return (
            <>
                <p>formInside</p>
            </>
        )
    }
})