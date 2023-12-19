// import { useState } from "react"

// const useCounter = (initialValue = 0) => {
//     const [count, setCount] = useState(initialValue)

//     const increment = () => {
//         setCount(prev => prev + 1)
//     }

//     return { count, increment }
// }

// const HookCounter = () => {

//     const { count, increment } = useCounter()

//     return (
//         <>
//             <p>this is count {count}</p>
//             <button onClick={increment}></button>
//         </>
//     )

// }

// export {counter, useCounter}

setTimeout(() => {
    console.log(document.getElementById("id") ,"called");
}, 1000);
