import React, { useEffect, useState } from "react";
import style from "./chat.module.css";
import { getUserByObjectId } from "../services/firebase";

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [user, Setuser] = useState({});
  const [menu, setMenu] = useState(false);
  const history = [
    { head: " Searched lorespusmfsafsafsafsa" },
    { head: " Searched lorespusmfsafsafsafsa" },
    { head: " Searched lorespusmfsafsafsafsa" },
    { head: " Searched lorespusmfsafsafsafsa" },
  ];
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      const newMessage = {
        id: messages.length,
        content: inputValue,
        sender: "user",
      };

      setMessages([...messages, newMessage]);
      setInputValue("");
      // Call API or function to handle ChatGPT's response here
    }
  };
  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id != null && id != "")
      getUserByObjectId({ setUser: Setuser, objectId: id });
  }, []);

  return (
    <div className={style.main}>
      {menu ? (
        <div
          className={style.menubtn}
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <img src="images/menu.png"></img>{" "}
        </div>
      ) : (
        <></>
      )}

      <div className={style.menu}>
        <div className={style.new}>
          {" "}
          <img src="images/new.png"></img>
          New question
        </div>
        <div className={style.his}>
          {history.map((ele) => {
            return (
              <div className={style.prev}>
                <img src="images/msg.png"></img>
                {ele.head}
              </div>
            );
          })}
        </div>

        <div className={style.bottom}>
          <div className={style.ul}></div>
          <div className={style.prof}>
            <img src="images/ac.png"></img>
            {user.name}
          </div>
          <div className={style.prof}>
            <img src="images/upgrade.png" style={{ height: "15px" }}></img>
            Upgrade Account
          </div>
        </div>
      </div>
      <div className={style.chatSec}>
        <div className={style.v1}>
          {" "}
          <div className={style.empty}>
            Try using the AI chatbot for comprehending Guru Granth Sahib Ji and
            learning of Sikh culture and language
          </div>
        </div>

        <div className={style.cinput}>
          <input placeholder="Send a message"></input>
          <img src="images/sent.png"></img>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
