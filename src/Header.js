import React, { useEffect, useState } from 'react';
import logo from "./assets/shared/logo.svg"
import iconHamburger from "./assets/shared/icon-hamburger.svg"
import ToggleNavBar from './components/Header/ToggleNavBar';
import NavLinks from './components/Header/NavLinks';
import { Link } from 'react-router-dom';

export default function Header() {

   const [width, setWidth] = useState(0)
   const [isToggled, setIsToggled] = useState(false)

   useEffect(() => {
      const updateWidth = () => setWidth(window.innerWidth)
      window.addEventListener('resize', updateWidth)
      updateWidth()
      return () => window.removeEventListener('resize', updateWidth)
   }, [])


   const toggleMenue = () => {
      setIsToggled(!isToggled)
   }

   return (
      <header>
         <Link to="/" className='star-icon-link--header'>
            <img className='star-icon--header' src={logo} alt='star icon' />
         </Link>

         <div className='line--header'></div>

         {width >= 375 && <NavLinks toggleMenue={toggleMenue} />}

         {width < 375 && (isToggled ?
            <ToggleNavBar
               isToggled={isToggled}
               toggleMenue={toggleMenue}
            /> :
            <img onClick={() => toggleMenue()}
               src={iconHamburger}
               alt="icon hamburger" />)}
      </header>
   )
}
