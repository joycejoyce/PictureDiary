import { Component } from "react";
import Articles from "./Articles.js";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Articles />
            </div>
        );
    }
}

export default Home;