import { useEffect, useState } from "react"

function useApi(url) {
    const [data, setData] = useState({})
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            console.log("Fetching Error", error);
          }
        };
    
        fetchData();
      }, [url]);
    return data
}

export default useApi;
  