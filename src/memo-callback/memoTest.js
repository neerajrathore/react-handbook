import React, { useCallback, useMemo } from 'react'
import List from './List'
const MemoTest = () => {
    const [number, setNumber] = React.useState(1)
    const [dark, setDark] = React.useState(false)

    // return the function in usecallback that you ndont want to be called each time
    // usecallback return the whole function where usememn returns the value of function
    // usemeno will throw error 
    const getNumbers = useCallback((increment) => {
        return [number + increment, number + 1, number + 2]
    }, [number])

    const theme = {
        display: "flex",
        flexDirection: "column",
        backgroundColor: dark ? "#222" : "#fff"
    }

    return (
        <div style={theme} >
            <input type="number" name="" onChange={(e) => { setNumber(e.target.value) }} />
            <button type="" onClick={() => { setDark(prevDark => !prevDark) }}>toggle theme</button>
            <List getItems={getNumbers} />
        </div>
    )
}

export default MemoTest