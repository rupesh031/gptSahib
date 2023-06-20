import React, { useState } from "react";
import style from "./login.module.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [pass, setpass] = useState();

  return (
    <div className={style.main}>
      <div className={style.sec1}>
        <img src="images/log.png"></img>
      </div>
      <div className={style.sec2}>
        <div className={style.acc}>
          <img src="images/acc.png"></img>
        </div>
        <div className={style.entry}>
          <input
            placeholder="Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div className={style.entry}>
          <input
            placeholder="Password"
            value={pass}
            onChange={(e) => {
              setpass(e.target.value);
            }}
          ></input>
        </div>
        <div className={style.forgot}>Forgot password?</div>
        <button className={style.logbtn}>Login</button>
        <button className={style.google}>
          {" "}
          <img src="images/google.png"></img> Continue with Google
        </button>
        <div className={style.noacc}>
          {" "}
          <Link to="/signup" style={{ color: "#7E440F" }}>
            {" "}
            Don't have an account{" "}
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}

export default Login;
