import LOGO_URL from "../utils/logo.png"
import { useState } from "react";
import {Link} from "react-router-dom"
import FollowUs from "./FollowUs";
import useOnlineStatus from "./useOnlineStatus";
let Header=()=>{
    let [LoginName,SetLoginName]=useState("Login"); 
     // It re renders whole Header Component i.e.., Calls Header Function Once Again
    let OnlineStatus=useOnlineStatus();
    return(
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src={LOGO_URL} alt=".logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status:{OnlineStatus?"🟢":"🔴"}</li>
                    {console.log(OnlineStatus)}
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/About">About</Link></li>
                    <li>Explore Menu</li>
                    <li>Delivery and Payments</li>
                    <li><Link to="/FollowUs">Follow Us</Link></li>
                    <li><Link to ="/grocery">Grocery</Link></li>
                    <button onClick={()=>{
                        SetLoginName("Logout")
                    }} className="Login">{LoginName}</button>
                </ul>
            </div>
        </div>
);
};

export default Header;