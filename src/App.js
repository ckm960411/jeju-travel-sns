import AppRouter from "./components/Router";
import "styles/App.scss"
import { useEffect, useState } from "react";
import Login from "routes/Login";
import { authService } from "fireBase";
import { onAuthStateChanged, updateProfile } from 'firebase/auth'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false) // 기본값 false!!
  const [userObj, setUserObj] = useState(false)

  useEffect(() => {
    onAuthStateChanged(authService, user => {
      if (user) {
        setIsLoggedIn(true)
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          photoURL: user.photoURL,
          updateProfile: (args) => updateProfile(user, args)
        })
      } else {
        setIsLoggedIn(false)
      }
    })
  } ,[])

  const onLogoutClick = () => {
    const ok = window.confirm("로그아웃 하시겠습니까?")
    if (ok) {
      setIsLoggedIn(false)
      authService.signOut()
    } else return
  }

  return (
    <>
      {isLoggedIn ? (
        <AppRouter userObj={userObj} onLogoutClick={onLogoutClick} />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;
