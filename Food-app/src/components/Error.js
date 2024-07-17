import {useRouteError} from "react-router-dom";
const Error=()=>{
    let err=useRouteError();
    console.log(err);
return(
    <div className="Error">
        <h3>{err.status} -{err.statusText}</h3>
        <img src="https://media.tenor.com/EccZ0jOhG90AAAAi/adi-avvadu-amma-sticker"/>
    </div>
)
};
export default Error;