import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavLinks(props) {
   const links = [
      {
         name: "home",
         number: "00"
      },
      {
         name: "destination",
         number: "01"
      },
      {
         name: "crew",
         number: "02"
      },
      {
         name: "technology",
         number: "03"
      }
   ]

   const activeClass = ({ isActive }) => isActive ? "active-nav--header" : "non-active-nav--header"

   return (
      <nav className='nav--home'>
         <div className='horizontal-line--header'></div>

         {links.map(item => {
            const path = item.name === "home" ? "/" : `/${item.name}`
            return (
               <NavLink
                  to={path} key={path}
                  className={activeClass}
                  onClick={() => props.toggleMenue()}>
                  <span className='nav-count--header'>{item.number}</span>
                  <span className='link--header'>{item.name}</span>
               </NavLink>
            )
         })}
      </nav>
   )
}
