import { Component } from "react";
import get from "./model/ArticleProps.js";

class Articles extends Component {
    render() {
        const articleProps = get();
        return (
            <div className="articles">
                {
                    articleProps.map(prop => (
                        <Article key={prop.title} props={prop} />
                    ))
                }
            </div>
        );
    }
}

class Article extends Component {
    render() {
        const {props} = this.props;
        const {title, date, text, imgUrls} = props;
        const imgType = imgUrls.length > 1 ? "multiImg" : "singleImg";
        return (
            <div className="article">
                <div className="title">{title}</div>
                <div className="date">{date}</div>
                <div className="text">{text}</div>
                <div className={imgType}>
                    {
                        imgUrls.map(imgUrl => (
                            <img src={imgUrl} alt="img"/>
                        ))
                    }
                </div>
                <div className="line"></div>
            </div>
        );
    }
}

export default Articles;