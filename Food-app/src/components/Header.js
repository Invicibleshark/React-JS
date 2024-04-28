import LOGO_URL from "../utils/logo.png"
import { useState } from "react";
let Header=()=>{
    let [LoginName,SetLoginName]=useState("Login");   // It re renders whole Header Component i.e.., Calls Header Function Once Again
    return(
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src={LOGO_URL} alt=".logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Why Choose Us?</li>
                    <li>Explore Menu</li>
                    <li>Delivery and Payments</li>
                    <li>Follow Us</li>
                    <button onClick={()=>{
                        SetLoginName("Logout")
                    }} className="Login">{LoginName}</button>
                </ul>
            </div>
        </div>
);
};

export default Header;