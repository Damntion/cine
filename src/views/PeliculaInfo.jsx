import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Head from '../components/Head';
import Footer from '../components/Footer';
import YouTube from 'react-youtube';

const PeliculaInfo = () => {
  // Estado local para almacenar los detalles de la película y la clave del trailer
  const [pelicula, setPelicula] = useState({});
  const [trailerKey, setTrailerKey] = useState(null);

  // Obtenemos el parámetro de la URL utilizando useParams de react-router-dom
  const { id } = useParams();

  // Definimos la URL base de la API y nuestra clave de acceso
  const URL = "https://api.themoviedb.org/3";
  const KEY = "aee0fb70b982494aefc3785f75876035";

  // useEffect para realizar una solicitud de detalles de película cuando el ID cambia
  useEffect(() => {
    // Definimos una función asincrónica para obtener los detalles de la película
    const obtenerDetallesPelicula = async () => {
      try {
        // Realizamos una solicitud GET a la API de películas utilizando fetch
        const respuesta = await fetch(`${URL}/movie/${id}?api_key=${KEY}&language=es-ES&append_to_response=videos,credits`);

        // Verificamos si la respuesta fue exitosa (código de estado 200)
        if (!respuesta.ok) {
          throw new Error(`Error de red: ${respuesta.status}`);
        }

        // Convertimos la respuesta en formato JSON
        const datos = await respuesta.json();

        // Actualizamos el estado de la película con los datos obtenidos
        setPelicula(datos);

        // Verificamos si hay un video de YouTube disponible en los resultados
        if (datos.videos && datos.videos.results.length > 0) {
          // Si hay un video disponible, establecemos la clave del trailer
          setTrailerKey(datos.videos.results[0].key);
        }
      } catch (error) {
        // Capturamos y manejamos cualquier error que pueda ocurrir durante la solicitud
        console.error("Error en la solicitud Fetch:", error);
      }
    };

    // Llamamos a la función obtenerDetallesPelicula para obtener los detalles de la película
    obtenerDetallesPelicula();
  }, [id]);  // El efecto se activa cada vez que el ID de la película cambia

  return (
    <div className="min-h-screen flex flex-col">
      <Head />
      <div className="container mx-auto p-4">
        <h2 className="text-4xl font-bold mb-4 text-center">{pelicula.title}</h2>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={`https://image.tmdb.org/t/p/original${pelicula.poster_path}`}
            alt={pelicula.title}
            className="w-72 h-auto object-cover mb-4 md:mr-4 md:mb-0 mx-auto md:mx-0"
          />
          <div className="md:flex-grow">
            <p className="text-gray-600 font-bold">Fecha de lanzamiento:</p>
            <p className="text-gray-600">{pelicula.release_date}</p>
            <p className="text-gray-600 font-bold">Calificación:</p>
            <p className="text-gray-600">{pelicula.vote_average}</p>
            <p className="text-gray-600 font-bold">Director:</p>
            <p className="text-gray-600">{pelicula.credits?.crew?.find(person => person.job === 'Director')?.name}</p>
            <p className="text-gray-600 font-bold">Actores:</p>
            <p className="text-gray-600">{pelicula.credits?.cast?.slice(0, 4).map(actor => actor.name).join(', ')}</p>
          </div>
        </div>
        <p className="text-gray-600 font-bold">Sinopsis:</p>
        <p className="text-justify text-gray-700 mb-4 w-1/2 mx-auto">{pelicula.overview}</p>
        {/* Renderiza el reproductor de YouTube si hay un trailer disponible */}
        {trailerKey && (
          <div className="my-8 text-center">
            <h3 className="text-xl font-bold mb-2">Trailer</h3>
            <YouTube videoId={trailerKey} opts={{ height: '390', width: '640' }} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
  
};

export default PeliculaInfo;
