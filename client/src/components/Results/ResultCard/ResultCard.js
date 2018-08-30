import React from "react";
import "./ResultCard.css";

const ResultCard = props => (
    <div className='resultCard rounded'>
        <h5>{props.title}</h5>
        <p>{props.date}</p>
        <a href={props.url}>{props.url}</a>
        <button className="btn btn-secondary favBtn">Favorite</button>
    </div>
)

export default ResultCard;