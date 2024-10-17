import React from 'react'
import { useState } from 'react'

const RenderItem = ({render}) => {

    // as name suggests rendering by props
    // render is a function

    let number = 24
    // let iterate = number.toString()
    let arr = []

    while(number > 0){
       
    }
    console.log(arr);

    const [count, setCount] = useState(5)

    return (render(count, setCount))
}

const RenderProps = () => {
    
    return (
        <RenderItem
            render={(count, setCount) => {
                console.log(count);
                return (
                    <p>this is count {count}</p>
                )
            }}
        />
    )
}

// custom hook is kind of same as render prop

export default RenderProps
