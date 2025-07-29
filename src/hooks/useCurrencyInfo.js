import {useState,useEffect} from 'react'

function useCurrencyInfo (currency){

    const [ data , setData] = useState({})

    useEffect(() => {
   
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    
        // this is called then chaining
        .then((res)=> res.json()) //when the data fetched from api the response comes as a string so we need to change it in json format  for that we are doing res.json()
    
        .then((res)=> setData(res[currency])) // now to hold the response
        console.log(data)

    }, [currency])
    console.log(data)

    return data

}

export default useCurrencyInfo;
    
  
