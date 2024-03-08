import Home from "./index.js"
import restaurantList from "../utils/Mockdata.js";
import { useState } from "react";


const Body=()=>{
    let [ListofRestaurants,setListofRestaurants]=useState(restaurantList);
    return (
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