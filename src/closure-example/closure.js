// Closures are a feature of JavaScript 
// that allows functions to access variables that are defined outside of their own scope. 
// In other words, a closure is created when a function is defined inside another function, 
// and the inner function retains access to the variables in the outer function even after the outer function has returned.


// import React from 'react'
// import { useRef } from 'react'
// import { useState } from 'react'

// const ClosureExample = () => {
//     const [count, setCount] = useState(0)

//     const ref = useRef(count)

//     // or ref.current = count

//     console.log(ref.current.innerHTML);
//     const handleAlert = () => {
//         setTimeout(() => {
//             console.log(ref.current.innerHTML);
//             alert(`clicked ${ref.current.innerHTML} times`)
//         }, 3000)
//     }

//     return (
//         <>
//             <h4>Closures</h4>
//             <p ref={ref}>{ count }</p>
//             <button onClick={() => setCount(count => count + 1)}>increase</button>
//             <button onClick={handleAlert}>show alert</button>
//         </>
//     )
// }

// export default ClosureExample

function Outer (value) {
    return () => {
        let innerValue;
        console.log(value, "data");
    }
}

console.log(Outer("hello")())
