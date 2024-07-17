import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import FollowUs from "./FollowUs";
import useOnlineStatus from "./useOnlineStatus";
import LOGO_URL from "../utils/logo.png";
import { Usercontext } from "./Usercontext";
const Header = () => {
  const [UserName, setUserName] = useState("");
  const [showMenu, setShowMenu] = useState(false); // State to manage menu visibility
  const onlineStatus = useOnlineStatus();
  const {LoggedInuser} =useContext(Usercontext);
  return (
    <div style={{ fontFamily: '"Arial"' }}className=" bg-custom-green py-3 px-4 md:px-10 md:flex md:justify-between items-center rounded-t-lg shadow-lg">
      <div className="flex flex-row">
      <div className="flex items-center flex-1">
        <img className="w-12 md:w-16" src={LOGO_URL} alt="Logo" />
        <h1 className="text-gray-500 text-lg md:text-xl font-semibold ml-2">Food Munch</h1>
      </div>
      <div>
        <button onClick={() => setShowMenu(!showMenu)} className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>
      </div>
      <nav className={`md:flex items-center ${showMenu ? 'block' : 'hidden'} mt-2`}>
        <ul className="flex flex-col md:flex-row gap-5 text-white">
          <li className="hover:text-green-600  text-md text-gray-400 rounded-md p-2 transition duration-300">Status:{onlineStatus?'🟢':'🔴'}</li>
          <li className="hover:text-green-600  text-md text-gray-400 rounded-md p-2 transition duration-300"><Link to="/">Home</Link></li>
          <li className="hover:text-green-600   text-md text-gray-400 rounded-md p-2 transition duration-300"><Link to="/about">About</Link></li>
          <li className="hover:text-green-600   text-md text-gray-400 rounded-md p-2 transition duration-300"><Link to="/DeliveryandPayment">Delivery & Payments</Link></li>
          <li className="hover:text-green-600   text-md text-gray-400 rounded-md p-2 transition duration-300"><Link to="/follow-us">Follow Us</Link></li>
          <li className="hover:text-green-600   text-md text-gray-400 rounded-md p-2 transition duration-300"><Link to="/grocery">Grocery</Link></li>
          <li className="hover:text-green-600   text-md text-gray-400 rounded-md p-2 transition duration-300 ">{LoggedInuser}👤</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
