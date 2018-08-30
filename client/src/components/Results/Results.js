import React from "react";
import "./Results.css";
import ResultCard from "./ResultCard";

const Results = props => (
    <div className="card topArticles">
        <div className="card-header">
            <i className="fa fa-table"></i>
            &nbsp;Top Articles
        </div>
        <div className="card-body">
            {props.articles.map((article) => (
                <ResultCard title={article.headline.main} date={article.pub_date} url={article.web_url} />
            ))}
        </div>
    </div>
)



export default Results;