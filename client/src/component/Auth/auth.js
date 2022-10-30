import React, { useState } from "react";
import LoginForm from "./loginForm";
const Auth = () => {
  const adminUser = {
    email: "mdyasinahmed@gmail.com",
    password: "2bKvw!pTnfG@R97",
  };
  const [user, setUser] = useState({ name: "", email: "" });
  //const [error, setError] = useState("");

  const Login = (details) => {
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("logged in");
      setUser({
        email: details.email,
      });
    } else {
      console.log("data do not match");
    }
  };
  const Logout = () => {
    setUser({ email: "", password: "" });
  };
  return (
    <div>
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome,<span>{user.email}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} />
      )}
    </div>
  );
};

export default Auth;
