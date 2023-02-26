import React from "react";
import "./AllCharacters.scss";
import { Link } from "react-router-dom";

function AllCharacters({ all, numPage, prevPage, nextPage }) {

  
  return (
    <div>
      <ul>
        {all.map((item, id) => (
          <li className="personaje" key={id}>
            <Link className="enlace" to={`/card/${item.id}`}>
              <h2>
                {item.id} - {item.name}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
      <div className="divButtons">

      {/* le pasamos display none al button de previous para que cuando inicies o vuelvas a la pagina 1 no aparezca */}
      
      <button className={numPage > 1 ? 'button' : 'none'} onClick={prevPage}>
      PREVIOUS
    </button>
        <button className="button" onClick={nextPage}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default AllCharacters;
