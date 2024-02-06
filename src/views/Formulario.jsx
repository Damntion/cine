import React, { useState } from 'react';
import Footer from '../components/Footer';
import Head from '../components/Head';

function Formulario() {
  const [modalVisible, setModalVisible] = useState(false);

  //funcion para leer los eventos y los cambios del formulario y en base a esto cambiamos el valor de la variable anterior(modalVisible)
  const handleReserva = (e) => {
    e.preventDefault();
    setModalVisible(true);
  };

  // Función para cerrar el modal y limpiar el formulario
  const closeModal = () => {
    //cambiamos el valor de la variables poniendolas a 1 o cambiando su contenido a una cadena vacia
    setModalVisible(false);
    setNombre('');
    setPelicula('');
    setAsientos(1);
  };

  return (
    <div>
      <Head />

      <div className="flex items-center justify-center h-screen">
        <form onSubmit={handleReserva} className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg space-y-8 w-full max-w-md">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Reservas</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Por favor, rellene el formulario a continuación para crear una nueva reserva.
            </p>
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <label htmlFor="fecha" className="font-medium text-gray-800 dark:text-gray-200 text-lg block">
                Fecha
              </label>
              <input
                type="date"
                id="fecha"
                className="w-full py-2 px-3 border border-input rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="hora" className="font-medium text-gray-800 dark:text-gray-200 text-lg block">
                Hora
              </label>
              <input
                type="time"
                id="hora"
                className="w-full py-2 px-3 border border-input rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="nombre" className="font-medium text-gray-800 dark:text-gray-200 text-lg block">
                Nombre
              </label>
              <input
                className="w-full h-10 border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-gray-200 dark:bg-gray-600 rounded-lg"
                id="nombre"
                placeholder="Introduce tu nombre"
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="telefono" className="font-medium text-gray-800 dark:text-gray-200 text-lg block">
                Pelicula
              </label>
              <input
                className="w-full h-10 border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-gray-200 dark:bg-gray-600 rounded-lg"
                id="telefono"
                placeholder="Introduce tu número de teléfono"
                type="tel"
              />
            </div>
          </div>

          {/* Botón de envío */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            id="pulsar"
          >
            Crear
          </button>
        </form>
      </div>

      {/* Modal */}
      {modalVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded shadow-md">
            <p className="text-lg font-bold mb-4">ENTRADA RESERVADA CORRECTAMENTE</p>
            <button onClick={closeModal} className="bg-blue-500 text-white p-2 rounded">
              Cerrar
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Formulario;
