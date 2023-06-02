import React from 'react'

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

  return (
    <div>PersonajesMarvel</div>
  )
}

export default PersonajesMarvel