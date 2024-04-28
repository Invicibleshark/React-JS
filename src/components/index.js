import React ,{lazy,Suspense}from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.js"
import Body from "./Body.js"
import { createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import { CLOUD_URL } from "../utils/constant.js";
import Error from "./Error.js";
import About from "./About.js"
import FollowUs from "./FollowUs.js"
import RestaurantMenu from "./RestuarantMenu.js";
let Grocery=lazy(()=>import ("./Grocery.js"));
// let Grocery = lazy(() => import("./Grocery.js"));

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
            <span>{avgRating}⭐</span>
            <p>{sla.deliveryTime} Mins</p>
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
            <Outlet/>
        </div>
    );
};
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/FollowUs",
                element:<FollowUs/>,
            },
            {
                path:"/Restaurant/:resId",
                element:<RestaurantMenu/>,
            },
            {
                path:"/grocery",
                element:(<Suspense fallback={<h1>This is Grocery Loading as it is Lazy Loader!!</h1>}>
                    <Grocery/>
                </Suspense>),
            },
        ],
        errorElement:<Error/>,
    },
    
]);

export default Home;
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>);
