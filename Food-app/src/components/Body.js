import Home from "./index.js"
import restaurantList from "../utils/Mockdata.js";
import { useState, useEffect} from "react";
import Loader from "./Shimmerui.js";

const Body=()=>{
    const fetchData=async()=>{
        const data=await fetch
        ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
        setListofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    }
    let [ListofRestaurants,setListofRestaurants]=useState([]);
    useEffect(()=>{
        fetchData();
    },[]);
    // if(ListofRestaurants.length ===0){
    //     return(<Loader/>);
    // }
    return (ListofRestaurants.length ===0)?<Loader/>:(
        <div className="bodyContainer">
        <div className="Search">
            <h1>This is Search</h1>
            <button className="Btn" onClick={()=>{
               const filteredList = ListofRestaurants.filter((i) => i.info.avgRating >4);
               setListofRestaurants(filteredList);
            }}>Filter Above 4</button>
        </div>
       
        <div className="Home">
            {
              ListofRestaurants.map((i) => (
                //Always pass id with map function
                <Home key={i.info.id} resdata={i} />
            ))
            }
        </div>
        </div>
    );
}; 
export default Body;