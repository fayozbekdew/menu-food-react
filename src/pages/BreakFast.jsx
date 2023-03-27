import { useState } from 'react' 
import { useFetch } from '../hooks/useFetch'
import React from 'react'

const BreakFast = () => {
  const [url, setUrl] = useState('http://localhost:3000/menu?category=breakfast')
  const {data  , error , isPending} = useFetch(url)
  return (
    <main>
        <section className="menu">
          <div className="section-center">
            {data && data.map((trip) => {
            return(
            <article className="menu-item">
            <img  src={trip.img} alt="buuter milk" className="photo" />
            <div className="item-info">
              <header>
                <h4>{trip.title}</h4>
                <span className="price">
                {trip.price}
                </span>
              </header>
              <p className="item-text">
              {trip.desc}
              </p>
            </div>
          </article>
            )
            } )}
          </div>
        </section>
      </main>
  )
}

export default BreakFast