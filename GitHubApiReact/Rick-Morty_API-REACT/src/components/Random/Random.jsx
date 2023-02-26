import React from 'react';
import './Random.scss'
import { useState, useEffect } from 'react';
import callRandom from "../../services/callRandom.js";


const Random = () => {

    const generateRandomNuber = () => Math.floor(Math.random() * 826) + 1;
    const [character, setCharacter] = useState([]);
    const [ide, setId] = useState(generateRandomNuber);

    useEffect(() => {
        callRandom(ide).then((res) => {
          setCharacter(res);
        });
      }, [ide]);

  return (
        <div className='characterDiv'>
            <img className='imgRandom'  src={character.image} alt='imageCharacter'/>
            <p>{character.id} - {character.name}</p>
            <p className={character.status}>{character.status}</p>
        </div>
  )
}

export default Random;
