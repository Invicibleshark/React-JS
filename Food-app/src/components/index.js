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
import { Hotel_image } from "../utils/constant.js";
import Rating from "../utils/Rating.png"
import Delivery from "./delivery.js";
let Grocery=lazy(()=>import ("./Grocery.js"));
// let Grocery = lazy(() => import("./Grocery.js"));

let heading=React.createElement("h1",{},"this is heading");
let root=ReactDOM.createRoot(document.getElementById("root"));

const Home = (props) => {
    const { resdata } = props;
    const { cloudinaryImageId, name, avgRating, cuisines, locality, areaName, sla, promoted, isOpen } = resdata?.info;
    return (
        <div style={{ fontFamily: 'Arial' }} className="mx-auto my-3 w-full max-w-[300px] h-102">
            <div className=" gap-3 font-sans bg-white border border-gray-200 hover:border-gray-300 rounded-lg shadow-lg overflow-hidden h-full">
                <img className="w-full h-40 object-cover" alt={name} src={CLOUD_URL + cloudinaryImageId} />
                <div className="p-3 h-65 object-cover">
                    <h1 className="text-xl font-semibold mb-1">{name}</h1>
                    <div className="flex items-center mb-1 h-20">
                        <span className="bg-green-400 text-white text-sm py-1 px-2 rounded mr-1">{avgRating}⭐</span>
                        <p className="text-gray-600 text-sm">{cuisines.join(", ")}</p>
                    </div>
                    <p className="text-gray-600 text-sm mb-1">{locality}, {areaName}</p>
                    <p className="text-gray-600 text-sm mb-3">⏳{sla.deliveryTime} Mins</p>
                </div>
            </div>
        </div>
    );
};

// Higher Order Component 
// Res Card ===>  ResCard Promoted
export const withPromotedLabel = (Home) => {
    return (props) => {
        return (
            <div style={{ fontFamily: 'Arial' }} className="transition-transform lg:hover:scale-95 relative h-102">
                <label className=" mt-4 bg-green-400 text-white p-2 absolute pr-2 rounded-r-lg z-10">Open</label>
                <Home {...props} />
            </div>
        );
    };
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
                path:"/DeliveryandPayment",
                element:<Delivery/>
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
