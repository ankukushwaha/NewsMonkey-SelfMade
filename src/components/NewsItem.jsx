import React from "react";
import Image from "./images/BMD-3398.png";

function NewsItem(props) {
    const date = new Date(props.date);
    return (
        <div className="card container" style={{backgroundColor: props.mode === 'light'?'white':'#14141463',
        color: props.mode === 'light'?'black':'white'}} height="40">
            <img height='200' src={props.image ? props.image : Image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.Title && (props.Title).slice(0,50)}... <span className="badge text-bg-danger">{props.name}</span></h5>
                <p className="card-text">{props.description && (props.description).slice(0,120)}...</p>
                <p className="card-text text-danger">By {props.author} on {date.toLocaleString('en-IN')}</p>
                <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
            </div>
        </div>
    );
}

export default NewsItem;