import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, Children } from "react";
import { withPromotedLabel } from "./Restaurant"
import useFetch from "./useFetch";
const Restaurant = () => {
    const PromotedRestaurant = withPromotedLabel(RestaurantCard);
    const resData = useFetch();
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
            <div >
                <label
                    style={{ padding: '4px', background: "#000", color: "#fff", opacity: '0.5' }}
                >Promoted</label>
                <Children {...props} />
            </div>
        )
    }
}

export default Restaurant;