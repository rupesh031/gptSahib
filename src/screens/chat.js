import React, { useEffect, useState } from "react";
import style from "./chat.module.css";
import { getResp, getUserByObjectId } from "../services/firebase";

function ChatPage() {
  const [inputValue, setInputValue] = useState("");
  const [ans, setAns] = useState(null);
  const [error, setError] = useState(null);
  const [user, Setuser] = useState({});
  const [menu, setMenu] = useState(false);
  const [sidebarHis, setSideBar] = useState([]);
  const [history, setHistory] = useState([]);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      history.push({ query: inputValue, ans: "" });
      setHistory(history);
      console.log(history);
      setInputValue("");
      getResp({ query: inputValue, setAns: setAns, setError: setError });
    }
  };
  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id != null && id != "")
      getUserByObjectId({ setUser: Setuser, objectId: id });
  }, []);

  useEffect(() => {
    if (ans != null) {
      if (history.length != 0) {
        const updatedHistory = [...history];
        const val = updatedHistory[updatedHistory.length - 1];
        updatedHistory[updatedHistory.length - 1] = {
          query: val.query,
          ans: ans,
        };
        setHistory(updatedHistory);
        //post history
      }
    }
  }, [ans]);
  useEffect(() => {}, [history]);

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
        {sidebarHis.length != 0 ? (
          <div className={style.his}>
            {sidebarHis.map((ele) => {
              return (
                <div className={style.prev}>
                  <img src="images/msg.png"></img>
                  {ele.head}
                </div>
              );
            })(<></>)}
          </div>
        ) : (
          <></>
        )}

        <div className={style.bottom}>
          <div className={style.ul}></div>
          <div className={style.prof}>
            <img src="images/ac.png"></img>
            {user.name}
          </div>

          <div
            className={style.prof}
            onClick={() => {
              window.location = "/#pricing";
            }}
          >
            <img src="images/upgrade.png" style={{ height: "15px" }}></img>
            Upgrade Account
          </div>
        </div>
      </div>
      <div className={style.chatSec}>
        <div className={style.v1}>
          {" "}
          {history.length == 0 ? (
            <div className={style.empty}>
              Try using the AI chatbot for comprehending Guru Granth Sahib Ji
              and learning of Sikh culture and language
            </div>
          ) : (
            <div className={style.chats}>
              {history.map((val, id) => {
                return (
                  <div className={style.qele} key={id}>
                    <div className={style.query}>
                      {" "}
                      <img src="images/acc.png"></img> {val.query}{" "}
                    </div>
                    <div className={style.hr}></div>
                    <div className={style.ans}>
                      {" "}
                      <img src="images/logo.png"></img> {val.ans}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className={style.cinput}>
          <input
            placeholder="Send a message"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            value={inputValue}
          ></input>
          <img src="images/sent.png" onClick={handleSendMessage}></img>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
