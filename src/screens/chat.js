import React, { useEffect, useState } from "react";
import style from "./chat.module.css";
import {
  addHistory,
  createHistory,
  fetchHistory,
  getResp,
  getUserByObjectId,
} from "../services/firebase";

function ChatPage() {
  const [inputValue, setInputValue] = useState("");
  const [ans, setAns] = useState(null);
  const [error, setError] = useState(null);
  const [user, Setuser] = useState({});
  const [menu, setMenu] = useState(false);
  const [newChat, setNewChat] = useState(null);
  const [sidebarHis, setSideBar] = useState([]);
  const [currId, setCurr] = useState(null);
  const [history, setHistory] = useState([]);

  const handleSendMessage = async () => {
    if (inputValue.trim() !== "") {
      const updatedHistory = [...history, { query: inputValue, ans: "" }];
      setHistory(updatedHistory);
      setInputValue("");
      await getResp({
        query: inputValue,
        setAns: setAns,
        setError: setError,
      });
      getAns({ answer: "ans" });
    }
  };

  useEffect(() => {
    console.log("called");
    const id = localStorage.getItem("id");
    if (id != null && id != "")
      getUserByObjectId({
        setUser: Setuser,
        objectId: id,
        setSideBar: setSideBar,
      });

    // localStorage.removeItem("currId");
    // const chatid = localStorage.getItem("currId");
    // if (chatid != null && chatid != "") {
    //   setCurr(chatid);
    // } else {
    //   setNewChat(true);
    // }
  }, []);

  // useEffect(() => {
  //   if (currId != null) {
  //     localStorage.setItem("currId", currId);
  //   }
  //   console.log(currId);
  // }, [currId]);

  const getAns = ({ answer }) => {
    console.log("ger ans called");
    console.log(answer);
    if (history.length == 0) return;
    const updatedHistory = [...history]; // Create a copy of the current history state
    const lastEntryIndex = updatedHistory.length - 1;
    const val = updatedHistory[lastEntryIndex];
    val.ans = answer;
    updatedHistory[lastEntryIndex] = val;
    setHistory(updatedHistory);
    // if (currId == null) {
    //   createHistory({
    //     uid: user.objectId,
    //     data: updatedHistory, // Use the updatedHistory here
    //     setCurrId: setCurr,
    //     setNewChat: setNewChat,
    //   });
    //   // fetchHistory({ userId: user.objectId, setSideBar: setSideBar });
    // } else {
    //   addHistory({
    //     userId: user.objectId,
    //     uid: currId,
    //     data: updatedHistory,
    //   });
    // }
  };

  useEffect(() => {}, [history]);

  const setNew = () => {
    // localStorage.removeItem("currId");
    // setCurr(null);
    setNewChat(true);
    setHistory([]);
  };

  console.log(history);
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
        <div className={style.new} onClick={() => setNew()}>
          {" "}
          <img src="images/new.png"></img>
          New question
        </div>
        {sidebarHis != [] &&
        sidebarHis != null &&
        sidebarHis.length &&
        sidebarHis ? (
          <div className={style.his}>
            {/* {history.map((ele) => {
              return (
                <div
                  className={style.prev}
                  onClick={() => {
                    setCurr(ele.uid);
                  }}
                >
                  <img src="images/msg.png"></img>
                  {ele}
                </div>
              );
            })(<></>)} */}
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
          {history == [] || history == null || history.length == 0 ? (
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

                    <div className={style.ans}>
                      {" "}
                      <img src="images/logo.png"></img> {val.ans}
                    </div>
                    <div className={style.hr}></div>
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
