import { Route, Routes } from "react-router"
import { NavbarComponent } from "./components/NavbarComponent"
import { Home } from "./pages/Home"
import { Movies } from "./pages/Movies"


function App() {

  return (
    <>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
      </Routes>
    </>
  )
}

export default App
