import { useState, useEffect } from 'react';
const useFetch = () => {
    const [resData, setResData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.971599&lng=77.594566')
        const jsonData = await data.json();
        setResData(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return resData;
}

export default useFetch;