import React from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom';
import LandingPage from './stores/pages/LandingPage';
import MobilePages from './stores/pages/MobilePages';
import ComputerPage from './stores/pages/ComputerPage';
import MenPage from './stores/pages/Menpage';
import WomenPage from './stores/pages/WomenPage'
import WatchPage from './stores/pages/WatchesPage';
import Furniture from './stores/pages/FurniturePage';
import Ac from './stores/pages/Acpage';
import MobilesSingle from './singles/mobilesSingle';
import ComputerSingle from './singles/computerSingle';
import Watch from './singles/watchesSingle';
const App= () => {
  return (
    <div>
      <Routes>
        
       <Route path='/' element={<LandingPage/>}/>
       <Route path='/mobiles' element={<MobilePages/>}/>
       <Route path='/computers' element={<ComputerPage/>}/>
       <Route path='/men' element={<MenPage/>}/>
       <Route path='/woman' element={<WomenPage/>}/>
       <Route path='/watch' element={<WatchPage/>}/>
       <Route path='/furniture' element={<Furniture/>}/>
       <Route path='/ac' element={<Ac/>}/>
       <Route path='/mobiles/:id' element={<MobilesSingle/>}/>
       <Route path='/computer/:id' element ={<ComputerSingle/>}/>
       <Route path='/watches/:id' element={<Watch/>}/>
      </Routes>
    </div>
  )
}
export default App
