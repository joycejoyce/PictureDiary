import { Component } from "react";
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";

class Article extends Component {
    getClassName(parent) {
        if(parent === "Articles") {
            return "article-preview";
        }
        else if(parent === "FullArticle") {
            return "article-full";
        }
    }

    render() {
        const { props, target } = this.props;
        const { id, title, date, text, imgUrls } = props;
        // const imgType = imgUrls.length > 1 ? "multiImg" : "singleImg";
        const className = this.getClassName(this.props.parent);
        return (
            <div className={className}>
                <Link className="title" 
                    to={{ pathname: "/fullArticle/"+id }}
                    target={target}
                    rel="noopener noreferrer">
                    {title}
                </Link>
                <div className="date">{date}</div>
                <div className="text">{text}</div>
                <div className="imgContainer">
                    {
                        imgUrls.map((imgUrl,idx) => (
                            <img key={idx} src={imgUrl} alt="img"/>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(Article);