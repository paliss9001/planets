import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Earth from './pages/Earth';
import Venus from './pages/Venus';
import Mercury from './pages/Mercury';
import Header from './components/Header';
import Jupiter from './pages/Jupiter';
import Mars from './pages/Mars';
import Neptune from './pages/Neptune';
import Saturn from './pages/Saturn';
import Uranus from './pages/Uranus';
import { useState } from 'react';


function App() {
  const [activePlanet, setActivePlanet] = useState('mercury')
  const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

  function handleActivePlanet(e) {
    setActivePlanet(e.target.dataset['planet'])
    console.log(e.target)
  }

  return (
    <HashRouter>
    <Header activePlanet={activePlanet} setActivePlanet={setActivePlanet}>
      {planets.map((planet, i) => (
        <LinkPlanet key={i} planet={planet} activePlanet={activePlanet} handleActivePlanet={handleActivePlanet} />
      ))}
    </Header>
       
    <Routes>
      <Route path='/' element={<Mercury></Mercury>}></Route>
      <Route path='/venus' element={<Venus></Venus>}></Route>
      <Route path='/earth' element={<Earth></Earth>}></Route>
      <Route path='/mars' element={<Mars></Mars>}></Route>    
      <Route path='/jupiter' element={<Jupiter></Jupiter>}></Route>    
      <Route path='/saturn' element={<Saturn></Saturn>}></Route>    
      <Route path='/uranus' element={<Uranus></Uranus>}></Route> 
      <Route path='/neptune' element={<Neptune></Neptune>}></Route>    
    </Routes>
    </HashRouter>
  )
}

export default App

function LinkPlanet({planet, activePlanet, handleActivePlanet}) {
  if (planet === "mercury") {
    return <Link to={`/`} data-planet={planet} onClick={handleActivePlanet} className={planet === activePlanet ? planet+ " active" : ""}>{planet}</Link>
  }
  
  return (
    <Link to={`/${planet}`} data-planet={planet} onClick={handleActivePlanet} className={planet === activePlanet ? planet+ " active" : ""}>{planet}</Link>
  )
}