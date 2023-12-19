import React, { useState, useCallback } from "react";
import { useRef } from "react";
import { useEffect } from "react";

function Child({ handleClick }) {
    console.log("Child component rendered");
    return <button onClick={handleClick}>Click me please</button>;
}

export default function CallbackParent() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    // useRef returns a mutable object that persists across renders
    const prevIncrement = useRef();

    // useCallback returns a memoized function that only changes when count changes
    // const handleClick = useCallback(() => {
    //     console.log("child");
    //     setCount((prevCount) => prevCount + 1);
    // }, [count]);

    useEffect(() => {
        // compare the current and previous references of the function
        if (prevIncrement.current !== handleClick) {
          console.log("Function recreated");
        } else {
          console.log("Function unchanged");
        }
        // update the previous reference with the current one
        prevIncrement.current = handleClick;
      });
    const handleClick = () => {
        console.log("child");
        // setCount((prevCount) => prevCount + 1);
    };

    //the handleClick function is a closure that can access the count and setCount variables from the Parent component.

    console.log("Parent component rendered");
    return (
        <div>
            <p>Count: {count} and {count2}</p>
            {/* <button onClick={() => setCount2(count => count + 2)}>second vala</button> */}
            <Child handleClick={handleClick} />
        </div>
    );
}

// closures can help you avoid unnecessary re-rendering of components by creating stable references to functions and variables. 
// For example, you can use the useCallback hook to memoize a function that depends on some props or state, 
// and pass it to a child component as a prop. This way, the function will only be recreated when the dependencies change, 
// and the child component will not re-render unless the prop function changes

