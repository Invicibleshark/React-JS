import React,{useEffect,useState} from 'react'

export const useOnlineStatus = () => {
    const [OnlineStatus,setOnlineStatus]=useState("true");
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        });
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        });
    },[]);
  return OnlineStatus;
}
export default useOnlineStatus;