const RestaurantCard = (props) => {
    const { name, cloudinaryImageId, cuisines, avgRatingString, costForTwo } = props.resInfo;

    return (
        <div className="res-card">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                alt="Res Image"
                className="res-img"
            />
            <h5>{name}</h5>
            <p>{avgRatingString}</p>
            <p>{cuisines.length > 2 ? cuisines.splice(0, 2).join(', ') : cuisines.join(', ')}</p>
            <p>{costForTwo}</p>
        </div>

    )
}

export default RestaurantCard;