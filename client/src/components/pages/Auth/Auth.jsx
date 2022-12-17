import React from "react";
import SignIn from "./signIn";
import "./Auth.css";
import SingUp from "./SingUp";
import { useState } from "react";

const Auth = () => {
  const [isSingIn, setIsSingIn] = useState(false);

  const handelSingIn = () => {
    setIsSingIn(!isSingIn);
  };


  return (
    <div className="main">
      {isSingIn ? (
        <SignIn handelSingIn={handelSingIn} />
      ) : (
        <SingUp handelSingIn={handelSingIn} />
      )}
    </div>
  );
};

export default Auth;
