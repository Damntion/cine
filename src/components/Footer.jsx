import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-700 text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sección de Películas */}
          <div>
            <h2 className="text-xl font-bold mb-4">Películas</h2>
            <ul>
              <li>Cartelera</li>
              <li>VOSE</li>
              <li>Venta Anticipada</li>
              <li>Próximamente</li>
            </ul>
          </div>

          {/* Sección de Nuestros Cines */}
          <div>
            <h2 className="text-xl font-bold mb-4">Nuestros Cines</h2>
            <ul>
              <li>Bahía de Cádiz (Cádiz)</li>
              <li>Conquistadores (Badajoz)</li>
              <li>El Ingenio (Vélez Málaga)</li>
              <li>El Tablero (Córdoba)</li>
              <li>Los Alcores (Alcalá de Guadaíra)</li>
              <li>Luz del Tajo (Toledo)</li>
              <li>Málaga Nostrum (Málaga)</li>
              <li>Miramar (Fuengirola)</li>
              <li>Nervión Plaza (Sevilla)</li>
            </ul>
          </div>

          {/* Sección de Eventos */}
          <div>
            <h2 className="text-xl font-bold mb-4">Eventos</h2>
            <ul>
              <li>Todos</li>
              <li>Sesiones Exclusivas</li>
              <li>Ciclos Exclusivos</li>
            </ul>
          </div>

          {/* Sección de Otros */}
          <div>
            <h2 className="text-xl font-bold mb-4">Otros</h2>
            <ul>
              <li>Contacto</li>
              <li>Tarjeta 5</li>
              <li>Colegios</li>
              <li>Cumpleaños</li>
              <li>Alquiler de sala</li>
              <li>Apoyo Institucional</li>
              <li>Política de Privacidad</li>
              <li>Aviso Legal</li>
              <li>Quiénes Somos</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
