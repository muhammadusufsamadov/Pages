import { BrowserRouter, Route, Routes } from 'react-router'
import Info from './Info'
import App2 from './App2'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App2/>}/>
      <Route path='/App2' element={<App2/>}/>
      <Route path='/Info/:id' element={<Info/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App