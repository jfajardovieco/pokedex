
import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomePages from './pages/HomePages'
import PokedexPage from './pages/PokedexPage'
import PokeinfoPage from './pages/PokeinfoPage'
import { useSelector } from 'react-redux'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {
  
const trainerName = useSelector(store => store.trainerName )
  return (
    <div>
      <Routes>
      <Route path='/' element={<HomePages/>}/>
      <Route element={<ProtectedRoutes />}>
      <Route path='/pokedex' element={<PokedexPage/>}/>
      <Route path='/pokedex/:id' element={<PokeinfoPage/>}/>
      </Route>
      </Routes>
    </div>
  )
}

export default App
