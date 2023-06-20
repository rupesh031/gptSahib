import logo from "./logo.svg";
import "./App.css";
import Main from "./screens/main";
import Login from "./screens/login";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Signup from "./screens/signup";
import ChatPage from "./screens/chat";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
