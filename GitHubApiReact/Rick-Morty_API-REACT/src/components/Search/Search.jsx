import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import searchApi from "../../services/searchApi";
import "./Search.scss";

//Creamos el componente "Search", que tiene:
//-La función "doSearch" que llama a la función "searchApi" (en la carpeta de "services") y nos devuelte el array de resultados de la api
const Search = () => {
  const doSearch = async (page, name) => {
    const res = await searchApi(page, name);
    if (res.error) {
      setError(true);
      return;
    }
    setResults([...res.results]);
    setError(false);
  };

  //-Las variables de estado "page" y "name" para cambiar de página después sustituyendo el valor en la url y para cambiar el valor de búsqueda, "results" para guardar los resultados que nos trae la función "doSearch" y "error" para guardar el error.

  const [page, setPage] = useState(0);
  const [results, setResults] = useState([]);
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  //-Dos funciones useEffect, una para cambiar doSearch cuando cambiemos la página y otra para hacerlo cuando cambie el nombre, inicilizándolo en uno siempre que cambie el nombre o la página y saliendo de la función siempre que no haya nombre y página para que en el return solo se muestre el input.
  useEffect(() => {
    if (!page) {
      return;
    }
    doSearch(page, name);
  }, [page]);

  useEffect(() => {
    if (!name) {
      return;
    }
    setPage(1);
    doSearch(1, name);
  }, [name]);

  //-Las funciones de prevPage y nextPage para aumentar o disminuir el valor de page cuadno usamos los botones.
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page >= 1) {
      setPage(page + 1);
    }
  };

  //Retornamos el buscador, que tendrá un onChange cada vez que el valor del nombre cambie. Debajo, un div en el que, si el array está vacío, nos arroje "No hay resultados" y, si no, que haga un .map de los resultados con el nombre de cada personaje buscado. Debajo, los botones de "previous" y "next".
  return (
    <span>
      <h2 className="h2Search">BUSCA TU PERSONAJE</h2>
    <div className="buscador">
      <input
        onChange={(ev) => {
          setName(ev.target.value);
        }}
      />
      <div className="resultados">
        {results.map((result) => (
          <Link key={result.name} to = {`/card/${result.id}`}>
          {result.name}
          </Link>
        ))}
      </div>
      <div className="divButtons">
        <button className={page > 1 ? "button" : "none"} onClick={prevPage}>
          PREVIOUS
        </button>
        <button
          className={page < 1 ? "none" : "button"}
          disabled={error}
          onClick={nextPage}
        >
          NEXT
        </button>
      </div>
    </div>
    </span>
  );
};

export default Search;