import { Component } from "react";
import { getAll } from "./model/ArticleProps.js";
import Article from "./Article.js";
import ReadMoreBtn from "./ReadMoreBtn.js";

class Articles extends Component {
    render() {
        const articleProps = getAll();

        return (
            <div className="articles">
                {
                    articleProps.map((prop,idx) => (
                        <>
                            <Article key={idx} props={prop} parent="Articles" target="_blank" />                
                            <ReadMoreBtn />
                            <div className="line"></div>
                        </>
                    ))
                }
            </div>
        );
    }
}

export default Articles;