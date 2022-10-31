import React from 'react'

const Currency = ({type,handleCurrencyChange,amount}) => {
    const handleChange=(e)=>{
        handleCurrencyChange(e.target.value)
    }
  return (
    <>
    <input value={amount} onChange={handleChange} placeholder={type}/>
    </>
  )
}

export default Currency