import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, Children } from "react";
import { withPromotedLabel } from "./Restaurant"
const Restaurant = () => {

    const [resData, setResData] = useState([]);
    const PromotedRestaurant = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.971599&lng=77.594566')
        const jsonData = await data.json();
        setResData(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return (
        <div className="restaurant">
            <div className="res-card-container">
                {
                    resData?.map((res) => (
                        res?.info?.avgRating >= 4.5 ?
                            <PromotedRestaurant key={res.info.id} resInfo={res.info} /> :
                            <RestaurantCard key={res.info.id} resInfo={res.info} />
                    ))
                }
            </div>
        </div>
    )
}

export const withPromotedLabel = (Children) => {
    return (props) => {
        return (
            <div style={{ display: "flex", flexDirection: "column", width: "15%" }}>
                <label
                    style={{ padding: '4px', background: "#000", color: "#fff", opacity: '0.5' }}
                >Promoted</label>
                <Children {...props} />
            </div>
        )
    }
}

export default Restaurant;