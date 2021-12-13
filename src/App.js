import AppRouter from "./components/Router";
import "styles/App.scss"
import { useState } from "react";
import Login from "routes/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false) // 기본값 false!!

  return (
    <>
      {isLoggedIn ? (
        <AppRouter />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;
