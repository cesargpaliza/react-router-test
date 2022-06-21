import { Route, Routes, Link, useMatch, useParams, NavLink } from 'react-router-dom';
 
const Proyecto = () => {
  const match = useMatch('/portafolio/:proyecto_id');
  const params = useParams();
  const { proyecto_id } = params;
  console.log({ match, params });
  return <h2>Proyecto: {proyecto_id}</h2>;
};
 
const Portafolio = () => {
  return (
    <div>
      <h1>Portafolio</h1>
      <ul>
          {/* Una versión especial del <Link> que agregará atributos de estilo
          al elemento renderizado cuando coincida con la URL actual. */}
        <li>
          <NavLink to="proyecto-1" style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}>Proyecto 1</NavLink>
        </li>
        <li>
          <NavLink to="proyecto-2" style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}>Proyecto 2</NavLink>
        </li>
      </ul>
      <section>
        <Routes>
          <Route path=":proyecto_id" element={<Proyecto />}></Route>
        </Routes>
      </section>
    </div>
  );
};
 
function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/portafolio">Portafolio</NavLink>
          </li>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route exact path="/" element={<h1>Inicio</h1>}></Route>
          <Route path="portafolio/*" element={<Portafolio />}></Route>
        </Routes>
      </section>
    </div>
  );
}
 
export default App;