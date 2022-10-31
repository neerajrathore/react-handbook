import React, {useEffect, useState} from 'react'
import Currency from './Currency'
import InrCurrency from './inrCurrency'
import UsdCurrency from './usdCurrency'

// const INRtoUSD = (number) => {
//     return number/80
// }

// const USDtoINR = (number) => {
//     return number*80
// }

const CurrencyConverterNew = () => {
    // const [USD, USDtoINR] = useState();
    // const [INR, INRtoUSD] = useState();

    // function USDtoINR(number) {
        
    // }
    const [Type, setType] = useState('INR');
    const [Amount, setAmount] = useState();
    const handleInrChange=(amt)=>{
        setAmount(amt);
        setType("INR");
    }
    const handleUsdChange=(amt)=>{
        setAmount(amt);
        setType("USD");
    }
    const InrAmount=Type=="INR"? Amount:(Amount*80);
    const UsdAmount=Type=="USD"? Amount:(Amount/80);
    console.log(InrAmount);
    console.log(UsdAmount);
  return (
    // <>
    // <div>CurrencyConverterNew</div>
    // <InrCurrency someData = {INRtoUSD}></InrCurrency>
    // <UsdCurrency someData = {USDtoINR}></UsdCurrency>
    // </>
    <>
    <Currency
    type="INR" amount = {Amount} handleCurrencyChange = {handleInrChange}
    />
    <Currency
    type="USD" amount = {Amount} handleCurrencyChange = {handleUsdChange}
    />
    </>
  )
}

export default CurrencyConverterNew