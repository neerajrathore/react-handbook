import React, { useState, useEffect } from 'react'

const UsdCurrency = ({ someData }) => {
    const [USD, setUSD] = useState();
    const handleUSDChange = (e) => {
        console.log(e);
        setUSD(e.target.value)
    }
    useEffect(() => {
        const inrElement = document.getElementById('inrInput')
        const updatedValue = someData(USD)
        inrElement.value = updatedValue;
    }, [USD])
    return (
        <input id='usdInput' type="number" placeholder='USD' onChange={handleUSDChange} value={USD} />
    )
}

export default UsdCurrency