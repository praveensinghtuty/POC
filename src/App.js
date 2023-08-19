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
  function closeChat(event) {
    document.querySelector(".App-header").classList.remove("open");
    document.querySelector(".App-header").classList.add("closed");
  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
      <header className="App-header closed">
        <div className="close-button" onClick={closeChat}>
          X
        </div>
        <div className="chat-bot">
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
