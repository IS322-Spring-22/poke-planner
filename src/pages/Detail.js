import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
    const { pokemonID } = useParams();

    useEffect( () => {
        console.log("Pokemon ID: " + pokemonID);
    }, [pokemonID]);

  return (
    <div>
      <h1 className="text-center">Detail Page</h1>
    </div>
  );
}

export default Detail;
