import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { crew } from '../../Data/data'

export default function Crew() {

   const [crewMember, setCrewMember] = useState("douglas-hurley")

   useEffect(() => {
      document.body.className = "crew--body"
   }, [])

   const crewList = crew.map(item => {
      return item.name.replace(/ /g, "-").toLocaleLowerCase()
   })

   const data = crew.find(item =>
      item.name.replace(/ /g, "-").toLocaleLowerCase() === crewMember)

   const activeLinkClass = ({ isActive }) => isActive ? "current-link--crew" : "link--crew"

   return (
      <div className='crew'>
         <p className='meet--crew'>
            <span>02</span>
            Meet your crew
         </p>

         <img src={data.images.webp}
            alt={`a portrait of ${data.name}`}
            className={`crew-img--crew ${data.name.replace(/ /g, "-").toLocaleLowerCase()}`} />

         <hr />

         <div className='links-container--crew'>
            {crewList.map(item =>
               <NavLink onClick={() => setCrewMember(item)}
                  key={item}
                  className={activeLinkClass}
                  to={`/crew/${item}`}></NavLink>
            )}
         </div>

         <div className='info-container--crew'>
            <p className='role--crew'>{data.role}</p>
            <h1 className='title--crew'>{data.name}</h1>
            <p className='bio--crew'>{data.bio}</p>
         </div>

      </div>
   )
}

