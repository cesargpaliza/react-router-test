import { Routes, Route, Link, Outlet } from 'react-router-dom'

const Portafolio = () => {
  return(
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li><Link to={'/portafolio/proyecto1'}>Proyecto 1</Link></li>
        <li><Link to={'/portafolio/proyecto2'}>Proyecto 1</Link></li>
      </ul>
      <section>
        <Routes>
          <Route path="proyecto1" element={'Proyecto 1 🎈'}/>
          <Route path="proyecto2" element={'Proyecto 2 🎨'}/>          
        </Routes>
      </section>
      <section>
        <Outlet/>
      </section>
    </div>

  )
}



function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Inicio</Link>
          </li>
          <li>
            <Link to='/portafolio'>Portafolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/" element={'inicio'}/>
          <Route path="/portafolio/*" element={<Portafolio/>}/>
        </Routes>
      </section>
    </div>
  );
}

export default App;
