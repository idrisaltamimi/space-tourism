import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { destinations } from '../../Data/data'

export default function Destination(props) {

   const [destination, setDestination] = useState("moon")

   useEffect(() => {
      document.body.className = "destination--body"
   }, [])

   const destinationsList = destinations.map(item => {
      return item.name.replace(/ /g, "-").toLocaleLowerCase()
   })

   const data = destinations.find(item =>
      item.name.toLocaleLowerCase() === destination)

   const activeLinkClass = ({ isActive }) => isActive ? "current-link--destination" : "link--destination"
   return (
      <div className='destination'>
         <p className='pick--destination'>
            <span>01</span>
            Pick your destination
         </p>

         <img src={data.images.webp} alt={data.name} className='planet-img--destination' />

         <div className='links-container--destination'>
            {destinationsList.map(item =>
               <NavLink onClick={() => setDestination(item)}
                  key={item}
                  className={activeLinkClass}
                  to={`/destination/${item.toLocaleLowerCase()}`}>{item}</NavLink>
            )}
         </div>

         <h1 className='title--destination'>{data.name}</h1>
         <p className='description--destination'>{data.description}</p>

         <section className='bottom-container--destination'>
            <div className='first-container'>
               <p className='label--destination'>AVG. DISTANCE</p>
               <h3 className='value--destination'>{data.distance}</h3>
            </div>

            <div className='second-container'>
               <p className='label--destination'>Est. travel time</p>
               <h3 className='value--destination'>{data.travel}</h3>
            </div>
         </section>

      </div>
   )
}








