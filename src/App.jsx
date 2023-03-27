import { useState } from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Filter from './component/filter'
import './css/App.css'
import All from './pages/All'
import './css/index.css'
import './css/App.css'
import Shakes from './pages/Shakes'
import Lunch from './pages/Lunch'
import BreakFast from './pages/BreakFast'

function App() {
  return (
    <div className="App">
      <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
      </div>
      <Router>
        <Filter/>
        
        <Routes>
          <Route path='/' element={<All/>}/>
          <Route path='/breakFast' element={<BreakFast/>}/>
          <Route path='/lunch' element={<Lunch/>}/>
          <Route path='/shakes' element={<Shakes/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
