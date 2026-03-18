import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router"
import Info from './Pages/Info'
import Jotai from './Pages/Jotai'
import Redux from './Pages/Redux'
import Zustand from './Pages/Zustand'
import Layout from './Pages/Layout'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
    <Route index element={<Zustand/>}/>
    <Route path='/Info' element={<Info/>}/>
    <Route path='/Jotai' element={<Jotai/>}/>
    <Route path='/Redux' element={<Redux/>}/>
    <Route path='/Zustand' element={<Zustand/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App