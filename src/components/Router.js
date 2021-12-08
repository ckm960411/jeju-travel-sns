import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "routes/Login"
import Profile from "routes/Profile"
import Home from "../routes/Home"
import Navigation from "./Navigation"

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" exact element={<Home />} />
          </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default AppRouter