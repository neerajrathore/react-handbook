import React, { ReactNode } from 'react'
import './Modal.css'

type ButtonProps = {
    heading: String
    // handleCloseIconClick: MouseEventHandler,
    handleCloseIconClick: React.MouseEventHandler<HTMLButtonElement>
    // handleCloseIconClick: (event: any) => {}
    // handleCloseIconClick: any
    children: ReactNode | String,
    // handleSubmitButton: EventHandler<any>
    handleSubmitButton: React.MouseEventHandler<HTMLButtonElement>
    isFooter?: boolean,
    onInputChange: any
}

const Modal: React.FC<ButtonProps> = ({ heading, children, handleCloseIconClick, handleSubmitButton, isFooter = false }) => {

    //If you want to pass a parameter to the click event handler you need to make use of the arrow function or bind the function
    return (
        <div className='modal-container'>
            <div className='modelBox'>
                <div className='headers'>
                    <div>{heading}</div>
                    <button style={{ color: 'blue' }} onClick={(event) => handleCloseIconClick(event)} >close</button>
                </div>
                <div className='main'>
                    {children}
                </div>
                {isFooter && <div className='footer'>
                    <button type='button' onClick={(ev) => handleSubmitButton(ev)}>submit</button>
                </div>}
            </div>
        </div>
    )
}

export default Modal