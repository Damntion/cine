import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Importamos el CSS de Bootstrap
import { Carousel } from 'react-bootstrap';  // Importamos el componente Carousel de react-bootstrap

function Carrusel() {
  // Definimos las constantes para la URL de la API, la clave de acceso y la ruta de la imagen
  const URL = "https://api.themoviedb.org/3";
  const KEY = "aee0fb70b982494aefc3785f75876035";
  const IMAGEN_PATH = "https://image.tmdb.org/t/p/original";

  // Estado local para almacenar las películas
  const [peliculas, setPeliculas] = useState([]);

  // useEffect para realizar una solicitud de datos cuando el componente se monta
  useEffect(() => {
    // Definimos una función asincrónica para obtener las películas
    const fetchData = async () => {
      try {
        // Realizamos una solicitud GET a la API de películas utilizando fetch
        const response = await fetch(`${URL}/discover/movie?api_key=${KEY}&language=es-ES`);

        // Verificamos si la respuesta fue exitosa (código de estado 200)
        if (!response.ok) {
          throw new Error(`Error de red: ${response.status}`);
        }

        // Convertimos la respuesta en formato JSON
        const data = await response.json();

        // Actualizamos el estado de las películas con los datos obtenidos (solo las cinco primeras)
        setPeliculas(data.results.slice(0, 5));
      } catch (error) {
        // Capturamos y manejamos cualquier error que pueda ocurrir durante la solicitud
        console.error("Error en la solicitud Fetch:", error);
      }
    };

    // Llamamos a la función fetchData para obtener las películas cuando el componente se monta
    fetchData();
  }, []);  // El efecto se activa solo una vez, cuando el componente se monta

  // Renderizamos el componente Carrusel
  return (
    <section className="mb-6 h-1/5 w-1/5 sliderIn">
      {/* Utilizamos el componente Carousel de react-bootstrap */}
      <Carousel interval={null} pause="hover">
        {/* Mapeamos las películas y renderizamos cada una como un elemento del Carousel */}
        {peliculas.map((pelicula) => (
          <Carousel.Item key={pelicula.id}>
            <img
              className="d-block w-100"
              src={`${IMAGEN_PATH}${pelicula.poster_path}`}
              alt={pelicula.title}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

// Exportamos el componente Carrusel para poder utilizarlo en otros archivos
export default Carrusel;
