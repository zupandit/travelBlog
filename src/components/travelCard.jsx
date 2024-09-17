import React from "react";
import pin from '../assets/pin.png'

export default function(props){
    return (
        <div className="card">
            <img className="cover-image" src={`/images/${props.coverImg}`}/>
            <div className="inside-card">
                <p className="pin"> <img src={pin}/>{props.location}</p>
                <h1>{props.title}</h1>
                <small className="date">{props.date}</small>
                <p className="card-description">{props.description}</p>
            </div>
        </div>
    )
}