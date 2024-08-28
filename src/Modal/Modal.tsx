import React, { EventHandler, MouseEventHandler, ReactNode } from 'react'
import './Modal.css'

type ButtonProps = {
    heading: String
    // handleCloseIconClick: MouseEventHandler,
    handleCloseIconClick: React.MouseEventHandler<HTMLButtonElement>
    // handleCloseIconClick: (event: any) => {}
    // handleCloseIconClick: any
    children: ReactNode | String,
    handleSubmitButton: EventHandler<any>
}

const Modal: React.FC<ButtonProps> = ({ heading, handleCloseIconClick, children, handleSubmitButton }) => {
    const handle = (event) => {
        console.log(heading, event);
        handleCloseIconClick(event)
    }
    //If you want to pass a parameter to the click event handler you need to make use of the arrow function or bind the function
    return (
        <div className='modal-container'>
            <div className='modelBox'>
                <div className='headers'>
                    <div onClick={handleSubmitButton}>this is a modal{heading}</div>
                    <button style={{ color: 'blue' }} onClick={(event) => handle(event)} >close</button>
                </div>
                <div className='main'>
                    {children}
                    Lorem, ipsum
                </div>
                <div className='footer'>
                    footer containt
                </div>
            </div>
        </div>
    )
}

export default Modal