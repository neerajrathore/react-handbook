import { useContext } from "react";
import {SomeContext, SomeContextProvider} from "./SomeContextProvider"

export const ContextDemo = () => {

    const data = useContext(SomeContext)
    return(
        <SomeContextProvider>
        <h2>"{data}" passed from there </h2>
        </SomeContextProvider>
    )



}