import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.js"
import Body from "./Body.js"
import { CLOUD_URL } from "../utils/constant.js";
let heading=React.createElement("h1",{},"this is heading");
let root=ReactDOM.createRoot(document.getElementById("root"));


let Home=(props)=>{
    const {resdata}=props;
    const {cloudinaryImageId,name,avgRating,cuisines,locality,sla}=resdata?.info;
    return(
          <div className="Item1">
           <img className="res-img" alt="Hotel-image"src={CLOUD_URL+cloudinaryImageId}></img>
            <div className="Content">
            <h2>{name}</h2>
            <span>⭐{avgRating} - {sla.deliveryTime} Mins</span>
            <p>{cuisines.join(",")}</p>
            <h4>{locality}</h4>
            </div>
            </div>
    );
};



const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};
export default Home;
root.render(<AppLayout/>);
