import { useEffect, useState } from "react";
function useDebounce(value, delay) {
    const [val,setVal] = useState()
    useEffect(()=>{
        const timeoutID = setTimeout(() => {
            setVal(value)
        }, delay);
        return (()=>clearTimeout(timeoutID))
    },[value])
    return val
}
export default useDebounce