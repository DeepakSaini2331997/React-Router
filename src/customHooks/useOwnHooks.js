import { useState,useEffect} from "react"
const useOwnHooks = (url)=>{
    const [data,setData] = useState([])
    useEffect(()=>{
            fetch(url)
            .then((res)=> res.json())
            .then((result)=> {{result.products?setData(result.products):setData(result)}})
    },[])

    return data;
}

export default useOwnHooks