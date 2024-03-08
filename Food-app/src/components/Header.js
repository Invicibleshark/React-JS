import LOGO_URL from "../utils/logo.png"
let Header=()=>{
    return(
        <div className="header">
            <div className="logoContainer">
                <img class="logo" src={LOGO_URL} alt=".logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Why Choose Us?</li>
                    <li>Explore Menu</li>
                    <li>Delivery and Payments</li>
                    <li>Follow Us</li>
                </ul>
            </div>
        </div>
);
};

export default Header;