//importaciones de elementos y demas
import React, { useState, useEffect } from 'react';
import Head from './components/Head';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';

//pagina principal del cine
function App() {
  //declaracion de costantes para las solicitudes y operaciones con los datos
    //url de la api 
  const URL = "https://api.themoviedb.org/3";
    //clave para autenticarte en la api
  const KEY = "aee0fb70b982494aefc3785f75876035";
    //direccion para las imagenes
  const IMAGEN_PATH = "https://image.tmdb.org/t/p/original";
    //variables de estado 
      //guardara en el estado un array 
  const [peliculas, setPeliculas] = useState([]);
      //guardara en el estado un string 
  const [busquedas, setBusquedas] = useState("");
      //guardara en el estado un mensaje de carga 
  const [peli, setPeli] = useState({
    title: "Cargando películas"
  });

  //parametros para la solicitud a la api
  const parametros = {
    api_key: KEY, //llave para utenticarse
    language: "es-ES", //lenguaje
    sort_by: "popularity.desc", //ordena las peliculas mas populares en orden descendiente
    query: busquedas ? `${busquedas}` : '', //se introduce en la query(consulta a la api personalizada) un operador ternario que hace que si no se a introducido nada en la barra de busqueda(si la variable busquedas esta vacia que mande el query con una cadena vacia)
  };

  //el hook useEffect lo utiliazmos para que al renderizar el componente de la pagina haga una funcion concreta, que en este caso es hacer la solicitud a la api 
  useEffect(() => {
    datosFetch();
  }, [busquedas]);//se le pasa la variable busquedas a la funcion datosFetch para que la procese 

  //Funcion para hacer la peticion a la api, utilizando fetch
  function datosFetch() {
    //se declara una variable llamada bus en la que, segun el operador ternario(si la variable busquedas tiene o no, algun valor), guardaremos el valor de la variable busquedas o el string discover
    const bus = busquedas ? "search" : "discover";
    //mostramos por consola un mensaje de confirmacion de solicitud a la api
    console.log("Obteniendo datos para:", busquedas);
    //en el fetch le pasamos la url con las variables creadas anteriormente, en un orden concreto y con los valores correctos para la solicitud
    fetch(`${URL}/${bus}/movie?api_key=${parametros.api_key}&language=${parametros.language}&sort_by=${parametros.sort_by}&query=${parametros.query}`)
      //manejamos la respuesta del servidor demanera que si la respuesta es favorable devolvera un json y si no mandara una exepcion 
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error de red: ${response.status}`);
        }
        return response.json();
      })
      //aqui manejamos los datos optenidos de la api
      .then(data => {
        //priemo los muestra por consola y luego se comprueba que existen atravez de su longitud para despues cambiar el valor de las variables de estado peliculas y peli a travez de su metodo set
        console.log(data);
        if (data.results.length > 0) {
          setPeliculas(data.results);
          setPeli(data.results[0]);
        } else {
          // Mostra un mensaje si no hay resultados
          setPeliculas([]);
          setPeli({ title: "No se encontraron resultados" });
        }
      })
      //Aqui se manejan los errores mostrando un mensaje por consola
      .catch(error => console.error("Error en la solicitud Fetch:", error));
  }
//rederisacion del componente
  return (
    <div className="min-h-screen flex flex-col">
      {/* Barra de búsqueda */}
      <Head onSearch={setBusquedas} />

      {/* Contenedor de películas, se utiliza el map para recorrer el array de peliculas */}
      <div className="flex-1 container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {peliculas.map(pelicula => (
          <Link to={`/PeliculaInfo/${pelicula.id}`} key={pelicula.id} className="hover:no-underline">
            <div className="bg-white rounded-md overflow-hidden shadow-md transition-transform transform hover:scale-105">
              <img
                src={`${IMAGEN_PATH}${pelicula.poster_path}`}
                alt={pelicula.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{pelicula.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Mensaje si no hay resultados */}
      {peliculas.length === 0 && (
        <div className="text-center text-gray-700">{peli.title}</div>
      )}

      {/* Pie de página */}
      <Footer />
    </div>
  );
}

export default App;
