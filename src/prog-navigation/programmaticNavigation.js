import React, { useState } from "react"
import { Route } from "react-router-dom";


// Using Redirect Component

export const Login = (props) => {
    console.log("pggggggg", props);
    props.history.push('/profile')
    return (
        <>
            <h2>ProgrammticNavigation</h2>
           
        </>
    )
}