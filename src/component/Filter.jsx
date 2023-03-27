import React from 'react'
import { Link } from 'react-router-dom'
import '../css/index.css'
import All from '../pages/All'
import BreakFast from '../pages/BreakFast'

const Filter = () => {
  return (
    <div>
        <div className="btn-container">
            
            <button className="btn">
            <Link to="/">All</Link>
            </button>
            <button className="btn">
            <Link to="/breakFast">breakfast</Link>
            </button>
            <button className="btn">
            <Link to="/lunch">lunch</Link>
            </button>
            <button className="btn">
            <Link to="/shakes">shakes</Link>
            </button>
          </div>
    </div>
  )
}

export default Filter