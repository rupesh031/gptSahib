import React from "react";
import style from "./main.module.css";
import Card1 from "./card1";

function Main() {
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
          <div className={style.ele}>Login</div>
          <div className={style.signup}>Signup </div>
        </div>
      </div>
      <div className={style.sec1}>
        <div className={style.bg1}>
          <img src="images/bg1.png"></img>
        </div>
        <div className={style.content}>
          <div className={style.header}>GPT SAHIB</div>
          <div className={style.con}>
            {" "}
            AI chatbot for comprehending Guru Granth Sahib Ji and learning of
            Sikh culture and language
          </div>
          <div className={style.try}>
            <div className={style.try1}>
              Try Free <img src="images/up.png"></img>
            </div>
            <div className={style.try2}> Read about us</div>
          </div>
        </div>
      </div>
      <div className={style.sec2}>
        <div className={style.bg2}>
          <img src="images/bg2.png"></img>
        </div>
        <div
          className={style.header}
          style={{
            marginTop: "80px",
            color: "white",
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
