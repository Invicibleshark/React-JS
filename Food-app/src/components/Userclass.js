import React from "react";
import {Link} from "react-router-dom";
import { TwitterUrl ,LocationUrl} from "../utils/constant";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

class Userclass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            UserInfo:{
                name:"User",
            location:"Location",
            },
        }
    }
    async componentDidMount(){
        //User for Making Api Calls
        let data=await fetch("https://api.github.com/users/invicibleshark");
        let json=await data.json();
        this.setState(
            {
                UserInfo:json,
            }
        )
        console.log(json);
    }
    render(){
        let {login,avatar_url,html_url,location,twitter_username}=this.state.UserInfo;
        return(
            <div className="h-screen  flex justify-center items-center">
                <div class="User rounded-lg border bg-white border-green-500 text-green-500 shadow-lg  p-5 gap-5 flex flex-row  justify-center align-middle">
                    <div >
                    <img className="rounded-full object-cover h-45 w-45" src={avatar_url}/>
                    </div>
                    <div className="Aboutdata flex flex-col justify-center">
                    <a href="https://github.com/Invicibleshark">
                    <h1 className="text-lg font-bold">{login}</h1>

                    </a>
                    <h3>A passionate Software developer from India</h3>
                    <a href="https://maps.app.goo.gl/3ww4e4u7e9YeShhU8">
                    <span className="Pictures"><FontAwesomeIcon icon={faLocationDot} /> {location}</span>
                    </a>
                    <a href="https://twitter.com/greekshark2004">
                    <span className="Pictures"><FontAwesomeIcon icon={faXTwitter} /> {twitter_username}</span>
                    </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Userclass;