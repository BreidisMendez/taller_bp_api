import React, { useEffect, useState } from 'react';

const PersonajesMarvel = () => {

    const [Personajes, setPersonajes] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
          fetchPersonajes();
        }
      }, [isLoading]);

      const fetchPersonajes = async () => {
        const apiKey = 'a4d59c5704cd70b188a6dc485879f63a';
        const offset = currentPage * 10; // Multiplica por el límite para obtener el offset correcto
        const response = await fetch(
          `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${apiKey}&hash=e831972e0007719d4a7d0d8a4c71f556&offset=${offset}`
        );
        const data = await response.json();
        setPersonajes(data.data.results);
        setIsLoading(false);
        console.log(data)
      };

      const handleLoadPersonajes = () => {
        setCurrentPage(0); // Reinicia la página al cargar nuevas Personajes
        setIsLoading(true);
      };

      
      const handlePreviousPage = () => {
        if (currentPage > 0) {
          setCurrentPage(currentPage - 1);
          setIsLoading(true);
        }
      };
    
      const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
        setIsLoading(true);
      };

  return (
<div>
        <h1>Personajes de Marvel</h1>
        <h2>PD: Algunas imagenes no funcionan</h2>
        
        <div>
          <button onClick={handleLoadPersonajes}>Traer Personajes</button>
          <button onClick={handlePreviousPage}>Anterior</button>
          <button onClick={handleNextPage}>Siguiente</button>
        </div>
        <ul>
          {Personajes.map((serie) => (
            <li key={serie.id}>
              <h3>{serie.name}</h3>
              <img
                src={`${serie.thumbnail.path}/standard_fantastic.${serie.thumbnail.extension}`}
                alt={serie.name}
              />
            </li>
          ))}
        </ul>
        <h3>Breidis Mendez</h3>
      </div>
    );
  };

export default PersonajesMarvel