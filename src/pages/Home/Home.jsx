import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import "./homeStyles.css";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";

const POPULAR_GIFS = ["Matrix", "Anime", "Metal", "Sea"];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  //Custom hook de wouter
  const [path, pushLocation] = useLocation();

  const { loading, gifs } = useGifs();

  //Cuando insertamos un input
  const handleSubmit = (evt) => {
    evt.preventDefault();
    //Navegar a otra ruta
    pushLocation(`/search/${keyword}`);
    console.log(keyword);
  };

  //Cuando cambia el input
  const handleChanged = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search a gif here..."
          onChange={handleChanged}
          type="text"
          value={keyword}
        />
        {/* El boton detecta de forma automatica el onSubmit, es una buena practica poner este */}
        <input type="submit" value="Buscar" />
      </form>
      <h3 className="App-title">Ultima búsqueda</h3>
      <ListOfGifs gifs={gifs} />
      <h3 className="App-title">Los gifs más populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
