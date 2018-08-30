import React from "react";
import "./ResultCard.css";
import API from '../../../utils/API'

class ResultCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleFavorite = this.handleFavorite.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleFavorite(event) {
        event.preventDefault();
        API.saveArticle({
            pkey: this.props.title,
            title: this.props.title,
            date: this.props.date,
            link: this.props.url,
        })
    }

    handleDelete(event) {
        event.preventDefault();
        API.removeArticle({
            pkey: this.props.title,
            title: this.props.title,
            date: this.props.date,
            link: this.props.url,
        });
    }

    getButton() {
        if (this.props.saved) {
            return (
                <button className='btn btn-secondary favBtn' onClick={this.handleDelete}>Delete</button>
            )
        } else {
            return (
                <button className='btn btn-secondary favBtn' onClick={this.handleFavorite}>Favorite</button>
            )
        }
    }

    render() {
        return (
            <div className='resultCard rounded'>
                <h5>{this.props.title}</h5>
                <p>{this.props.date}</p>
                <a href={this.props.url}>{this.props.url}</a>
                {this.getButton()}
            </div>
        );
    }
}

export default ResultCard;