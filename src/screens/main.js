import React, { useEffect, useState } from "react";
import style from "./main.module.css";
import Card1 from "./card1";
import { Link } from "react-router-dom";

function Main() {
  const [login, setLogin] = useState();
  const cardsl = [
    {
      header: "Guru Granth Sahib Ji",
      para: "Learn and understand the teachings of all the Gurus by comprehending Guru Granth Sahib Ji.",
    },
    {
      header: "Sikh Culture & History",
      para: " Learn about various Historical events, location of Gurudwaras worldwide and biographies of all the Gurus.",
    },
    {
      header: "Punjabi Language",
      para: "Learn the Sikh's language Punjabi at an amateur, advanced and professional level for students at school and university level.",
    },
  ];

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
      <div className={style.sec1} id="home">
        <div className={style.bg1}>
          <img src="images/main2.png"></img>
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
            <a href="#about" style={{ textDecoration: "none" }}>
              <div className={style.try2}> Read about us</div>
            </a>{" "}
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
          {cardsl.map((val) => {
            return <Card1 header={val.header} para={val.para} />;
          })}
        </div>
      </div>
      <div className={style.about} id="about">
        <div className={style.im}>
          <img src="images/main3.png"></img>
        </div>
        <div className={style.content1}>
          <div className={style.header}>ABOUT US</div>
          <div className={style.con1}>
            {" "}
            GPT Sahib is an AI-powered chatbot designed to represent and
            comprehend the teachings of Guru Granth Sahib Ji, the sacred
            scripture of Sikhism. It aims to educate users about Sikhism and
            promote the Punjabi language. By utilizing artificial intelligence,
            GPT Sahib offers an interactive platform for individuals from
            diverse backgrounds to explore and understand Sikhism. It provides
            accurate and insightful responses to queries about the sacred texts,
            historical events, and principles of the faith. Additionally, GPT
            Sahib serves as an educational resource for learning Punjabi,
            enabling users to engage with Sikh teachings in their original
            language. The chatbot's ultimate goal is to promote inclusivity,
            cultural understanding, and global knowledge dissemination about
            Sikhism.
          </div>
        </div>
      </div>

      <div className={style.bot}>
        <div className={style.nlogo}>
          <img src="images/logo1.png"></img>
        </div>
        <div className={style.nave}>
          <div className={style.navhead}>Explore</div>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a>FAQ</a>
          <a>Contact</a>
        </div>
        <div className={style.nave}>
          <div className={style.navhead}>Product</div>
          <a>Pricing</a>
          <a href={login == true || login == "true" ? "/chat" : "/login"}>
            Try Free
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
