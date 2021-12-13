import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "routes/Login"
import Profile from "routes/Profile"
import Home from "../routes/Home"
import Navigation from "./Navigation"

function AppRouter({ userObj, onLogoutClick }) {
  return (
    <>
      <BrowserRouter>
        <Navigation onLogoutClick={onLogoutClick} />
        
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" exact element={<Home userObj={userObj} />} />
          </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default AppRouter