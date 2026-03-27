import {BrowserRouter, Route, Routes} from "react-router"
import App from "./App"
import Info from "./Info"
const Routers = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<App/>}/>
        <Route path="/Info/:id" element={<Info/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routers