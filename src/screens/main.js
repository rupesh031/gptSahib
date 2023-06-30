import React, { useEffect, useState } from "react";
import style from "./main.module.css";
import Card1 from "./card1";
import { Link } from "react-router-dom";
import PricingCard from "./card2";
import Faq from "./faq";

function Main() {
  const [login, setLogin] = useState();
  const cardsl = [
    {
      header: "Guru Granth Sahib Ji",
      para: "Learn and understand the teachings of all the Gurus by comprehending Guru Granth Sahib Ji.",
      image: "images/card1.png",
    },
    {
      header: "Sikh Culture & History",
      para: " Learn about various Historical events, location of Gurudwaras worldwide and biographies of all the Gurus.",
      image: "images/off2.webp",
    },
    {
      header: "Punjabi Language",
      para: "Learn the Sikh's language Punjabi at an amateur, advanced and professional level for students at school and university level.",
      image: "images/off3.webp",
    },
  ];

  const cards2 = [
    {
      head: "Amateur",
      points: [
        "Basic learning of language",
        "Phrases of Guru Granth Sahib Ji",
        "Explore Sikh history",
        "Lists of all Gurudwaras worldwide",
      ],
      color: "#BC5E0E",
      path: "images/t1.png",
      price: ["15$", "Per week"],
    },
    {
      head: "Professional",
      points: [
        "Basic learning of language",
        "Phrases of Guru Granth Sahib Ji",
        "Explore Sikh history",
        "Lists of all Gurudwaras worldwide",
      ],
      color: "#BDBDBD",
      path: "images/t2.png",
      price: ["45$", "Per 6 month"],
    },
    {
      head: "Business",
      points: [
        "Basic learning of language",
        "Phrases of Guru Granth Sahib Ji",
        "Explore Sikh history",
        "Lists of all Gurudwaras worldwide",
      ],
      color: "#CCA237",
      path: "images/t3.png",
      price: ["70$", "Per year"],
    },
  ];

  const faqL = [
    {
      ques: "What is GPT Sahib ?",
      ans: "It is an AI chat bot that answers your questions and helps college and school students to learn punjabi.",
    },
    {
      ques: "Why is learning easy ?",
      ans: "GPT Sahib is really easy to use. You just have to type in your question in the Question box and a resolution or an answer to your question would be presented within a few minutes as per the authenticised data collected on the holy Guru Granth Sahib ji and the Sikh history. ",
    },
    {
      ques: "Why is it paid ?",
      ans: "Extensive research has been done to provide you with autheticiated data on Sikh history. It enlightens you with the teachings of the holy Guru Granth Sahib Ji and Sikh history. It is a model to ensure that every sikh child is self enabled to learn punjabi and about it's culture &amp; heritage. The paid model helps you get guidance to your problems as per the holy Guru Granth Sahib ji and also teaches you the basics of punjabi langauage and as well as write papers on Sikh history or culture for you.",
    },
  ];

  useEffect(() => {
    setLogin(localStorage.getItem("login"));
  }, [login]);
  //console.log(login);

  return (
    <div className={style.main}>
      <div className={style.nav}>
        <div className={style.nav1}>
          <img src="images/logo.png"></img>
          <a href="#pricing" className={style.ele}>
            Pricing
          </a>
          <a href="#contact" className={style.ele}>
            Contact{" "}
          </a>
          <a href="#faq" className={style.ele}>
            FAQ
          </a>
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
            return (
              <Card1 header={val.header} para={val.para} images={val.image} />
            );
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
      <div className={style.sec2} id="pricing">
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
          Pricing
        </div>
        <div className={style.cardSec}>
          {cards2.map((val) => {
            return <PricingCard card={val} />;
          })}
        </div>
      </div>

      <div id="contact" className={style.contact}>
        <div className={style.bgContact}>
          {" "}
          <img src="images/contact.png"></img>
        </div>
        <div className={style.conMain}>
          <div
            className={style.header}
            style={{
              marginTop: "80px",
              color: "#7E440F",
              textShadow: "none",
              fontSize: "40px",
              textAlign: "center",
            }}
          >
            {" "}
            Contact
          </div>
          <div className={style.contact1}>
            <input placeholder={"Name"}></input>
            <input placeholder={"Email"}></input>
          </div>
          <textarea placeholder="Message"></textarea>
          <div style={{ width: "80%", display: "flex" }}>
            <button className={style.conSend}>Send</button>
          </div>
        </div>
      </div>

      <div className={style.faq} id="faq">
        <div className={style.faqbg}>
          <img src="images/faq.png"></img>
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
          FAQ'S
        </div>

        <div className={style.faqSec}>
          {faqL.map((val) => {
            return <Faq Faq={val} />;
          })}
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
          <a href="#faq">FAQ</a>
          <a href="#contact"> Contact</a>
        </div>
        <div className={style.nave}>
          <div className={style.navhead}>Product</div>
          <a href="#pricing">Pricing</a>
          <a href={login == true || login == "true" ? "/chat" : "/login"}>
            Try Free
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
