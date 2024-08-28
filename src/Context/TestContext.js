import { useContext } from "react";
import {SomeContext, SomeContextProvider} from "./Controext"

export const Testify = () => {

    const data = useContext(SomeContext)
    return(
        <SomeContextProvider>
        <h2>"{data}" passed from there </h2>
        </SomeContextProvider>
    )


}
