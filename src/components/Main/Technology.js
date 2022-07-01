import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { technology } from '../../Data/data'

export default function Technology() {
   const [techName, setTechName] = useState("launch-vehicle")

   useEffect(() => {
      document.body.className = "technology--body"
   }, [])

   const technologyList = technology.map(item => {
      return item.name.replace(/ /g, "-").toLocaleLowerCase()
   })

   const data = technology.find(item =>
      item.name.replace(/ /g, "-").toLocaleLowerCase() === techName)

   const activeLinkClass = ({ isActive }) => isActive ? "current-link--tech" : "link--tech"


   return (
      <div className='tech'>
         <p className='space--tech'>
            <span>03</span>
            SPACE LAUNCH 101
         </p>

         <img className='img-landscape--tech'
            src={data.images.landscape}
            alt={`a landscape of ${data.name}`} />
         <img className='img-portrait--tech'
            src={data.images.portrait}
            alt={`a portrait of ${data.name}`} />

         <div className='links-container--tech'>
            {technologyList.map((item, index) =>
               <NavLink onClick={() => setTechName(item)}
                  key={item}
                  className={activeLinkClass}
                  to={`/technology/${item}`}>{index}</NavLink>
            )}
         </div>

         <div className='info-container--tech'>
            <p className='terminology--tech'>THE TERMINOLOGY…</p>
            <h1 className='title--tech'>{data.name}</h1>
            <p className='description--tech'>{data.description}</p>
         </div>

      </div>
   )
}
