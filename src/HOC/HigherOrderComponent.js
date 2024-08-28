import React, { useEffect, useState } from "react";

// higherOrderComponent is a function that takes a component and returns a component
const higherOrderComponent = WrappedComponent => {
    // We have created a new component called HOC which returns the <WrappedComponent/> from its render function.
    // HOC doesn’t modify the input component. Rather, a HOC composes the original component by wrapping it in a container component.
    // HOC is pure function with zero side effects

    class HOC extends React.Component {
        render() {
            // // retuen a jsx literal
            return <WrappedComponent />
        }
    }
    return HOC
}

const MyComponent = () => {
    const [first, setFirst] = useState([{
        firstName: "neeraj",
        lastName: "rathore",
    }])
    
    console.log(first, "new new");
    return (
        <>
            <h2 style={{padding:20}}>Name: {first[0].firstName}</h2>
            <button onClick={() => {
                setFirst((prev) => {
                    // return prev.map((item) => {
                    //     return ({...item,  firstName: "ritesh"})
                    // })

                    return [{...prev[0],  firstName: "Ritesh"}]
                }
                    
                )
            }}>Ritesh</button>

        </>
    )
}
export const SimpleHOC = higherOrderComponent(MyComponent)

// simpleHOC();