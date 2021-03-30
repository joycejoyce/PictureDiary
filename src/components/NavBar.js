import { Component } from "react";
import { AssetsPath } from "../GlobalVar.js";

class NavBar extends Component {
    render() {
        return (
            <div className="navBar">
                <div className="contents">
                    <img className="menu" src={AssetsPath + "menu.svg"} alt="menu" />
                    <img className="logo" src={AssetsPath + "logo.svg"} alt="logo" />
                    <img className="search" src={AssetsPath + "search.svg"} alt="search" />
                </div>
            </div>
        );
    }
}

export default NavBar;