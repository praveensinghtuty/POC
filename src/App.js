import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./App.css";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";

function App() {
  function openChat(event) {
    //event.target.classList.remove("open");
    //event.target.classList.add("closed");
    document.querySelector(".chat-bot").classList.remove("closed");
    document.querySelector(".chat-bot").classList.add("open");
  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
      <header className="App-header">
        {/* <div className = "help-button" onClick={openChat}>
          ?
        </div> */}
        <div className="chat-bot closed">
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            headerText="Chat with Openlane Bot"
            messageParser={MessageParser}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
