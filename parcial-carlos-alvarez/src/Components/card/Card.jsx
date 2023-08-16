import React from "react";
import "./Card.css"

function Card({name, song}){
    return(
        <div className="card">
            <h2>¡Hola {name}!</h2>
            <p>Tu cancion favorita es:</p>
            <p>{song}</p>
        </div>
    );
}
export default Card;