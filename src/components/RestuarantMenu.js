import { useEffect,useState } from "react";
import Loader from "./Shimmerui.js"
import {useParams} from "react-router-dom";
import {CLOUD_URL} from "../utils/constant.js"

 import { RestaurantUrl } from "../utils/constant.js";
const RestaurantMenu=()=>{
    const{resId}=useParams();
    let Fetcing=async ()=>{
        let data=await fetch(RestaurantUrl+resId);
        let json=await data.json();
        console.log(json);
        setrestuarantinfo(json.data);
    }
    useEffect(()=>{
        Fetcing();
    },[]); //Only Once so empty List
    let [restaurantinfo,setrestuarantinfo]=useState(null);
    if(restaurantinfo == null) return <Loader/> 
    let {name,id,locality,areaName,cuisines,avgRatingString,avgRating,totalRatingsString,availability,sla,costForTwo,cloudinaryImageId,feeDetails}=restaurantinfo?.cards[2]?.card?.card?.info;
    let {title,itemCards}=restaurantinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[10]?.card.card;
    //.itemCrads[0].card.info

    return (
        <div className="RestaurantMenu">
         <div class="RestaurantDetails">
            <div>
            <h3><img className="imageMenu" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="Food Image"/></h3>
            </div>
            <div class="MenuDetails">
            <h1>{name}</h1>
            <h3>{avgRating}({totalRatingsString}Ratings) {costForTwo}</h3>
            <h4>Outlet:<span>{locality.charAt(0).toUpperCase() +locality.slice(1)}</span></h4>
            <h4>Time:{sla.deliveryTime} mins Distance:{sla.slaString}</h4>
            </div>
         </div>
        <div class="Menu-Bar">
            <h1>Menu</h1>
            <ul className="Cusines">{cuisines.map((i)=><li key={id}>{i}</li>)}</ul>
        </div>
        <div class="Recommend-Bar">
            <h1>Recommended</h1>
            <div>
                <h1>{title}</h1>
                <ul>{itemCards.map((i)=>(
                    <div class="Menu" id={id}>
                        
                        <div>
                        <h1>{i.card.info.name}</h1>
                        <p>{i.card.info.description}</p>
                        </div>
                        <div>
                            <img className="imageMenu" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+i.card.info.imageId}/>
                        </div>
                    </div>
                ))}</ul>
            </div>
        </div>
        </div>
    )
};
export default RestaurantMenu;