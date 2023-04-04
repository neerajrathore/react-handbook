import React from "react";

export const SomeContext = React.createContext("neeraj");

export const SomeContextProvider = ({children}) => {
    let name = "oosma"
    return(
        <SomeContext.Provider value={name}>
            {children}
        </SomeContext.Provider>
    )
}

