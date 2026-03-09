import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './pages/Layout'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/Page2'/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App