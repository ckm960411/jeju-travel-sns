import AppRouter from "./components/Router";
import "styles/App.scss"
import { useState } from "react";
import Login from "routes/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true) // 기본값 false!!

  return (
    <>
      {isLoggedIn ? (
        <AppRouter />
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
