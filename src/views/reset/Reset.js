import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { auth, sendPasswordResetEmailM } from "../../firebase";
import "./Reset.css";
import { NavLink } from "react-router-dom";

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/dashboard");
  }, [user, loading]);

  return (
    <div className="reset">
      <div className="reset__container">
        <input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Dirección de correo electrónico"
        />
        <button
          className="reset__btn"
          onClick={() => sendPasswordResetEmailM(email)}
        >
          Enviar correo y restablecer contraseña
        </button>
        <NavLink to={"/Login"}>Cancelar</NavLink>
      </div>
    </div>
  );
}

export default Reset;
