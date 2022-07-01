import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import { destinations, crew, technology } from './Data/data'

import Crew from './components/Main/Crew'
import Destination from './components/Main/Destination'
import Home from './components/Main/Home'
import Technology from './components/Main/Technology'

export default function Main() {

   const router = (array, page) => {
      return array.map(item => {
         const name = item.name.replace(/ /g, "-").toLocaleLowerCase()
         return <Route path={name} key={name} element={page} />
      })
   }

   return (
      <div>
         <Routes>
            <Route path="/" element={<Home />} />

            <Route path={`/destination`}>
               <Route index element={<Navigate to="moon" />} />
               {router(destinations, <Destination />)}
            </Route>

            <Route path="/crew">
               <Route index element={<Navigate to="douglas-hurley" />} />
               {router(crew, <Crew />)}
            </Route>

            <Route path="/technology">
               <Route index element={<Navigate to="launch-vehicle" />} />
               {router(technology, <Technology />)}
            </Route>

            <Route path='*' element={<h1>Error </h1>} />
         </Routes>
      </div>
   )
}
