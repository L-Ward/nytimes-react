import React from "react";
import "./Results.css";
import ResultCard from "./ResultCard";

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.getResultCards = this.getResultCards.bind(this);
    }

    getResultCards() {
        if (this.props.saved) {
            if (this.props.articles.length > 0) {
                console.log(this.props.articles);
                return this.props.articles.map((article) => (
                    <ResultCard saved={this.props.saved} key={article.pkey} title={article.title} date={article.date} url={article.link} />
                ));
            } else {
                return(<div>No Saved Articles</div>)
            }
        } else {
            return this.props.articles.map((article) => (
                <ResultCard saved={this.props.saved} key={article.headline.main} title={article.headline.main} date={article.pub_date} url={article.web_url} />
            ));
        }
    }

    render() {
        return (
            <div className="card topArticles">
                <div className="card-header">
                    <i className="fa fa-table"></i>
                    &nbsp;Top Articles
                </div>
                <div className="card-body">
                    {this.getResultCards()}
                </div>
            </div>
        );
    }
}

export default Results;