import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carrusel from './Carrusel';

function Head({ onSearch }) {
  //variable de estado que se actualiza con los datos de la barra de 
  //busqueda atravez de la funcion handleSubmit, que es la que se encarga de manejar 
  //los cambios en la barra de busqueda y actulizarselos a la variable
  const [peliculaBuscada, setPeliculaBuscada] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(peliculaBuscada);
  }

  return (
    <div>
      {/* Barra de búsqueda */}
      <header className="flex items-center justify-between h-20 px-4 md:px-6 bg-gray-800 text-white">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          <span className="sr-only">Digital Cinema</span>
          🎬
        </Link>

        {/* Barra de búsqueda */}
        <nav className="flex-1 mx-4">
          <form className="relative" onSubmit={handleSubmit}>
            <input
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
              id="search"
              placeholder="Buscar películas..."
              type="search"
              onChange={(e) => setPeliculaBuscada(e.target.value)}
            />
          </form>
        </nav>

        {/* Enlaces de la derecha */}
        <div className="flex space-x-4">
          <Link to="/Formulario" className="text-sm font-medium hover:underline">
            Reservar
          </Link>
        </div>
      </header>

      {/* Carrusel de películas */}
      <div className="w-max text-center">
      <Carrusel />
      </div>
    </div>
  );
}

export default Head;
