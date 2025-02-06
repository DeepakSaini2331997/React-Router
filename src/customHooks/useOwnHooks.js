import { useState,useEffect} from "react"
const useOwnHooks = (url)=>{
    const [data,setData] = useState([])
    useEffect(()=>{
            fetch(url)
            .then((res)=> res.json())
            .then((result)=> {{setData(result.products)}})
    },[])

    return data;
}

export default useOwnHooks