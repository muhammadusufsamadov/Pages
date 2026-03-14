import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter, Routes } from 'react-router'
import Home from './pages/Home'
import Jotai from './pages/Jotai'
import Redux from './pages/Redux'
import Layout from './pages/Layout'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/Home' element={<Home/>}/>
      <Route index element={<Home/>}/>
      <Route path='/Jotai' element={<Jotai/>}/>
      <Route path='/Redux' element={<Redux/>}/>
      </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App