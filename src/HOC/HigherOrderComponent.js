import React from "react";

// higherOrderComponent is a function that takes a component and returns a component
const higherOrderComponent = WrappedComponent => {
    // We have created a new component called HOC which returns the <WrappedComponent/> from its render function.
    // HOC doesn’t modify the input component. Rather, a HOC composes the original component by wrapping it in a container component.
    // HOC is pure function with zero side effects
    
    class HOC extends React.Component {
        render() {
        // // retuen a jsx literal
            return <WrappedComponent/>
        }
    }
    return HOC
}


const MyComponent = () => {
    return (
        <>
        <h2>neeraj</h2>
        </>
    )
}
export const SimpleHOC = higherOrderComponent(MyComponent)

// simpleHOC();