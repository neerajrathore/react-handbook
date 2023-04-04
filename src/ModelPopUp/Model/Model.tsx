import React, { EventHandler, MouseEventHandler, ReactNode } from 'react'

type ButtonProps = {
    heading: String
    // handleCloseIconClick: MouseEventHandler,
    handleCloseIconClick: React.MouseEventHandler<HTMLButtonElement>
    children: ReactNode | String,
    handleSubmitbutton: EventHandler<any>
}

export const Model: React.FC<ButtonProps> = ({ heading, handleCloseIconClick, children , handleSubmitbutton}) => {
    const handle = (event) => {
        console.log(event);
        handleCloseIconClick(event)

    }
    //If you want to pass a parameter to the click event handler you need to make use of the arrow function or bind the functio
    return (
        <>
            <button onClick={(event) => handle(event)} >button</button>
            <div onClick={handleSubmitbutton}></div>
        </>
    )
}

// export default Model