import { useState, useEffect } from "react"

const getData = (url) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    const LoadLinks = async () => {
        try {
            const res = await fetch(url);
            const dataFromRes = await res.json();
            setData(dataFromRes)
            setIsPending(false)
            setError(null)
        } catch(err) {
            setIsPending(false)
            setError(err.message)
        }
    };
    useEffect(() => {
        LoadLinks()
    }, [url])
    return {data, isPending, error};
}

export default getData;