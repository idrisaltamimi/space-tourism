import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
   useEffect(() => {
      document.body.className = "home--body"
   }, [])
   return (
      <div className='home'>

         <p className='title-question--home'>SO, YOU WANT TO TRAVEL TO</p>

         <h1 className='title--home'>Space</h1>

         <p className='description--home'>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
         </p>

         <Link to="/destination" className='explore-btn--home'>
            EXPLORE
         </Link>
      </div>
   )
}
