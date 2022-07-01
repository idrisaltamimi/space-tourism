import React, { useEffect } from 'react'
import closeIcon from "../../assets/shared/icon-close.svg"
import NavLinks from './NavLinks'
import OutsideClickHandler from 'react-outside-click-handler'

export default function ToggleNavBar(props) {

   useEffect(() => {
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      return () => {
         document.body.style.overflow = "visible"
         document.body.style.position = "static"
      }
   }, [])

   return (
      <OutsideClickHandler onOutsideClick={() => props.toggleMenue()}>
         <div className='menue--header'>
            <img className='close-icon--header'
               onClick={() => props.toggleMenue()}
               src={closeIcon} alt='close icon' />
            <NavLinks />
         </div>
      </OutsideClickHandler>
   )
}
