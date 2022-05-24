import { useEffect, useState } from "react";

function useFetch(url) {

    
    const [data, setData] = useState(null)


    useEffect( () => {

        const fetchData = async () => {
            try {
                const req = await fetch(url)
                const res = await req.json()
                setData(res)
            } catch (error) {
                
            }

        }

        fetchData()

    }, [] )

    return [data]
}

export default useFetch