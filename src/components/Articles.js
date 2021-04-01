import { Component } from "react";
import { getAll } from "./model/ArticleProps.js";
import Article from "./Article.js";

class Articles extends Component {
    render() {
        const articleProps = getAll();

        return (
            <div className="articles">
                {
                    articleProps.map((prop,idx) => (
                        <Article key={idx} props={prop} target="_blank" />
                    ))
                }
            </div>
        );
    }
}

export default Articles;