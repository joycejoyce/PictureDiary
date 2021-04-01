import { Component } from "react";
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";

class Article extends Component {
    render() {
        const { props, target } = this.props;
        console.log("target", target);
        const { id, title, date, text, imgUrls } = props;
        const imgType = imgUrls.length > 1 ? "multiImg" : "singleImg";
        return (
            <div className="article">
                <Link className="title" 
                    to={{ pathname: "/fullArticle/"+id }}
                    target={target}
                    rel="noopener noreferrer">
                    {title}
                </Link>
                <div className="date">{date}</div>
                <div className="text">{text}</div>
                <div className={imgType}>
                    {
                        imgUrls.map((imgUrl,idx) => (
                            <img key={idx} src={imgUrl} alt="img"/>
                        ))
                    }
                </div>
                <div className="line"></div>
            </div>
        );
    }
}

export default withRouter(Article);