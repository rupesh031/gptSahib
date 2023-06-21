import React, { useEffect, useState } from "react";
import style from "./main.module.css";
import Card1 from "./card1";
import { Link } from "react-router-dom";

function Main() {
  const [login, setLogin] = useState();

  useEffect(() => {
    setLogin(localStorage.getItem("login"));
  }, [login]);
  console.log(login);

  return (
    <div className={style.main}>
      <div className={style.nav}>
        <div className={style.nav1}>
          <img src="images/logo.png"></img>{" "}
          <div className={style.ele}>Pricing</div>
          <div className={style.ele}>Contact </div>
          <div className={style.ele}>FAQ</div>
        </div>
        <div className={style.nav2}>
          {login == false || login == "false" || login == null ? (
            <>
              {" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <div className={style.ele}>Login</div>
              </Link>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <div className={style.signup}>Signup </div>
              </Link>
            </>
          ) : (
            <>
              {" "}
              <div
                className={style.ele}
                onClick={() => {
                  localStorage.setItem("login", "false");
                  localStorage.removeItem("id");
                  setLogin(false);
                }}
              >
                Logout
              </div>
            </>
          )}
        </div>
      </div>
      <div className={style.sec1}>
        <div className={style.bg1}>
          <img src="images/main.png"></img>
        </div>
        <div className={style.content}>
          <div className={style.header}>GPT SAHIB</div>
          <div className={style.con}>
            {" "}
            AI chatbot for comprehending Guru Granth Sahib Ji and learning of
            Sikh culture and language
          </div>
          <div className={style.try}>
            <Link
              to={login == true || login == "true" ? "/chat" : "/login"}
              style={{ textDecoration: "none" }}
            >
              <div className={style.try1}>
                Try Free <img src="images/up.png"></img>
              </div>
            </Link>

            <div className={style.try2}> Read about us</div>
          </div>
        </div>
      </div>
      <div className={style.sec2}>
        {/* <div className={style.bg2}>
          <img src="images/bg2.png"></img>
        </div> */}
        <div
          className={style.header}
          style={{
            marginTop: "80px",
            color: "#7E440F",
            textShadow: "none",
            fontSize: "40px",
          }}
        >
          {" "}
          what we offer
        </div>
        <div className={style.cardSec}>
          <Card1 />
          <Card1 />
          <Card1 />
        </div>
      </div>
    </div>
  );
}

export default Main;
