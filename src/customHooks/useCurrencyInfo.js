// hooks must always be in .js format
import { useEffect, useState } from "react";
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect( () => {
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
        fetch(url)
        .then((res) => res.json()) // if fetch -> succesful, then convert into json object
        .then((res) => setData(res[currency])) // if conversion -> successful, then store it
    }, [currency]);

    return data;
}

export default useCurrencyInfo;