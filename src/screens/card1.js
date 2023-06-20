import React from "react";
import style from "./main.module.css";

function Card1() {
  return (
    <div className={style.card}>
      <div className={style.card1}>
        <img src="images/card1.png"></img>
      </div>
      <div className={style.card2}>
        <div style={{ fontSize: "20px" }}> Guru Granth Sahib Ji</div>
        <br></br>
        <div>
          Learn and understand the teachings of all the Gurus by comprehending
          Guru Granth Sahib Ji.
        </div>
      </div>
    </div>
  );
}

export default Card1;
