import React from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import ErrorMorty from "../ErrorMorty/ErrorMorty";
import "./CardCharacter.scss";

function CardCharacter({ allCharacters }) {

  const params = useParams();
  const foundCharacter = allCharacters.find((element) => element.id === parseInt(params.id));

  return (
    <>

    {/* le ponemos la condicion de que si aun no hay datos de la pagina nos muestre nuestra view de ErrorMorty */}

    {foundCharacter ? <>
      <div className="card">
                <img src={foundCharacter.image} alt="imagen personaje" />
                <h2>{foundCharacter.name}</h2>
                <p>Gender: {foundCharacter.gender}</p>
                <p>Specie: {foundCharacter.species}</p>
                <p>Origin: {foundCharacter.origin.name}</p>
                <p>Location: {foundCharacter.location.name}</p>
      </div>
      <Link to='/list'>

      {/* aqui utilizamos tb nuestro componente Button para volver a la lista */}
      
      <Button texto={'BACK TO LIST'} />
      </Link>
    </>  : <ErrorMorty></ErrorMorty>}
    </>
  );
}

export default CardCharacter;


