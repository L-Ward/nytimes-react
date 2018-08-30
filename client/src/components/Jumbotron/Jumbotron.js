import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
    <div className="jumbotron">
        <strong>
        <h1 className="display-4 text-center">
        <i className="fa fa-newspaper-o"></i>
                &nbsp;New York Times Search
        </h1>
        </strong>
        <div className='row links justify-content-center'>
            <a href='/'>Home</a>
            &nbsp;
            &nbsp;
            <a href='/saved'>Saved</a>
        </div>
    </div>
)

export default Jumbotron;