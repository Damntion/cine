import React from 'react';
import App from '/src/App.jsx';
import {Routes, Route} from 'react-router-dom';
import PeliculaInfo from '../../views/peliculaInfo';
import Formulario from '../../views/Formulario';

class Router extends React.Component{
    render()
    {
        //Este es el archivo de rutas, que se utilizar para organizar las redirecciones de los componentes u elementos de la pagina
        return (
            
            <Routes>
                {/*rutas de los componenetes y elementos de la paguina, se definen a travez de la libreria de enrutamiento de react, mas concretamente de las etiquetas
                Routes(contenedor para agrupar varias rutas) y Route(define las rutas de los componentes)*/

                /*la ruta "/" es la ruta raiz*/}
                <Route
                    path='/'
                    element={<App />}
                />
                {/*ruta para la vista de las peliculas que se seleccionan, le pasamos un id para que luego en la paguina salga la pelicula elegida */}
                <Route
                    path='/PeliculaInfo/:id'
                    element={<PeliculaInfo/>}
                />
                {/*ruta al formulario */}
                <Route
                    path='/Formulario'
                    element={<Formulario/>}
                />

            </Routes>
        
        );
    }
}
export default Router;