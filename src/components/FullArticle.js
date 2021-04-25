import { useParams } from "react-router";
import { getById } from "./model/ArticleProps.js";
import Article from "./Article.js";

function FullArticle() {
    const { id } = useParams();
    const articleProps = getById(id);
    console.log("articleProps", articleProps);
    return (
        <div className="fullArticle">
            <Article props={articleProps} parent="FullArticle" target="" />
        </div>
    );
}

export default FullArticle;