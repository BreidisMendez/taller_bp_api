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

  return (
    <div>PersonajesMarvel</div>
  )
}

export default PersonajesMarvel