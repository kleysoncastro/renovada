import React from "react";
import "./Login.css";
export default function Login() {
  return (
    <>
      <section>
        <h1>Login</h1>
        <form>
          <label htmlFor="user" className="input-email">
            ID *
          </label>
          <input type="text" placeholder="ID do usuário" />
          <label htmlFor="password" className="input-password">
            Password
          </label>
          <input type="password" placeholder="Sua senha" />
          <button type="submit" className="bt">
            Login
          </button>
        </form>
      </section>
    </>
  );
}
