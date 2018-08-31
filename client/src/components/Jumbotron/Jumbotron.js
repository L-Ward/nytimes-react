import React from "react";
import {Link} from "react-router-dom";
import "./Jumbotron.css";

const Jumbotron = props => (
    <div className="jumbotron">
        <strong>
        <h1 className="display-4 text-center">
        <i className="fa fa-newspaper-o"></i>
                &nbsp;New York Times Search
        </h1>
        </strong>
        <div className='row justify-content-center'>
            <Link className='links' to='/'>Home</Link>
            &nbsp;
            &nbsp;
            <Link className='links' to='/saved'>Saved</Link>
        </div>
    </div>
)

export default Jumbotron;