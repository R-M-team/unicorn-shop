import menuIcon from "../assets/images/menuicon.png";
import closeIcon from "../assets/images/closeicon.png";
import {useState} from "react";

const Menu = (props) => {

    const [isOpen,setIsOpen] = useState(false);
    const openMenuStyle = {right: "0"};
    const closedMenuStyle = {right: "-200px"};

    return (
        <>
            <div id="sideNav" style={isOpen? openMenuStyle : closedMenuStyle}>
                <nav>
                    <ul>
                        <li><a href="#banner">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#service">Services</a></li>
                        <li><a href="#testimonial">Testmotion</a></li>
                        <li><a href="#footer">AboutUs</a></li>
                    </ul>
                </nav>
            </div>
            <div id="menuBtn" onClick={() => {setIsOpen(!isOpen)}}>
                <img src={isOpen? closeIcon : menuIcon}  id="menu" alt="menu button"/>
            </div>
        </>
    );
};

export default Menu;
