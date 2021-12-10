import "styles/Login.scss";
import modrak from "imgs/modrak.png";
import loginImg from "imgs/modrak-login-img2.png";
import { useState } from "react";

function Login() {
  const [newAccount, setNewAccount] = useState(false);

  return (
    <section id="Login">
        <div className="login__container">
          {/* logo */}
          <h1>
            <img src={modrak} alt="Modrak logo" className="login__logo" />
          </h1>
          {/* main */}
          <div className="login__mainContainer">

            <div className="login-img-wrapper">
              <img src={loginImg} alt="login-img" />
            </div>

            <div className="login__form-wrapper">
              <h2>모드락과 함께하세요!</h2>
              <form className="login__form">
                <input type="text" placeholder="your id" />
                <input type="password" placeholder="your password" />
                <input type="submit" value={newAccount ? "회원가입" : "로그인"} />
              </form>
              <button className="login__toggleBtn">아직 계정이 없으신가요?</button>
            </div>

          </div>
        </div>
    </section>
  );
}

export default Login;
