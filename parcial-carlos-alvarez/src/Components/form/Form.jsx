import React, {useState} from "react";
import Card from "../card/Card";
import "./Form.css"


function Form(){
    const [name, setName] = useState("");
    const [song, setSong] = useState("");
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);


    const handleSumbit = (e) => {
        e.preventDefault();
        setError("");

    if (name.length < 3 || /^\s/.test(name)){
        setError("Porfavor, ingresa un nombre valido.")
        return;
    }
    if (song.length < 6){
        setError("La cancion debera tener al menos 6 caracteres.")
        return;
    }
    setSubmitted(true);

    }

    return (
        <div>
            <form className="formulario" onSubmit={handleSumbit}>
                <label className="name">Nombre:</label>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)}required/>
                <label className="song">Cancion favorita:</label>
                <input type="text" value={song} onChange={(e)=> setSong(e.target.value)} required/>
                <button type="submit">Enviar</button>
                {error && <p style={{color: "red"}}>{error}</p>}
                {submitted && <Card name={name} song={song}/>}
            </form>

        </div>
    );
}
export default Form;