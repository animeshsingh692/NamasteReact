import RestaurantCard from "./RestaurantCard";
import { withPromotedLabel } from "./Restaurant"
import { useFetch } from "../Hooks/useFetch";
import { useOnlineStatus } from "../Hooks/useOnlineStatus";
const Restaurant = () => {
    const PromotedRestaurant = withPromotedLabel(RestaurantCard);
    const resData = useFetch();

    const internetStatus = useOnlineStatus();
    if (internetStatus === false) {
        return (
            <div>
                <h2>Look's like you're offline.</h2>
                <p>Please checkyour internet connection</p>
            </div>
        )
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