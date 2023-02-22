import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";

import PrimeReact from "primereact/api";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      navigate("/listPrincipal");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleNavigation}>
        <h2>Hello from login page</h2>

        <div className="form-1">
          <div className="form-2">
            <label>Username: </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-2">
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button type="submit">Login</button>
      </form>
    </>
  );
};
