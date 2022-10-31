import React, { useState, useEffect } from 'react'

const InrCurrency = ({someData}) => {
    const [INR, setINR] = useState();
    const handleINRChange = (e) => {
        console.log(e);
        setINR(e.target.value)
    }
    useEffect(() => {
        const usdElement = document.getElementById('usdInput')
        const newValue = someData(INR)
        usdElement.value = newValue;
    }, [INR])
    return (
        <input id='inrInput' type="number" placeholder='INR' onChange={handleINRChange} />
    )
}

export default InrCurrency