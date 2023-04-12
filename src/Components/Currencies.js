import { useEffect, useState } from "react";

export default function Currencies({currencies={}}) {

  const [currencyList, setCurrencyList] = useState([]);
  useEffect(()=>{
    const currencyWithSymbol = Object.values(currencies);
    //extract only currency name from arr of currency objects
    setCurrencyList(currencyWithSymbol.map(c => c.name));
  }, [currencies])

  console.log('child render curr')
  return (
    <span>
        {currencyList.map((currency, index)=>{
          return <span key={index}>
              {currency}
              {currencyList.length -1 !== index ? ', ' : ''}
            </span>
        })}
    </span>
  );
}