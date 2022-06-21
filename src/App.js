//Uso de useLocation
import { Route, Routes, Link, useLocation } from 'react-router-dom';
 
function useQuery(){
  return new URLSearchParams(useLocation().search)
}

function App() {
  // Obtener los parametros de la URL
  const query = useQuery()
  const valorPropiedad1 = query.get('propiedad_1')
 
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route exact path="/" element={<h1>Inicio</h1>}></Route>
          <Route exact path="/perfil" element={<h1>Perfil</h1>}></Route>
          <Route path="*" element={'404 Ruta no encontrada'} />
        </Routes>
      </section>
    </div>
  );
}
 
export default App;