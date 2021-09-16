import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import "./login.css";
import { auth, signInWithEmailAndPasswordM } from "../../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (error) {
      console.log("Favor de iniciar sesión de nuevo");
      //history.replace("/Login");
    }
    if (user) {
      console.log("Inision sess");
      history.replace("/admin/dashboard");
    }
  }, [user, loading]);

  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => signInWithEmailAndPasswordM(email, password)}
        >
          Ingresar
        </button>
        <div>
          <Link to="/reset">Olvide mi contraseña</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
