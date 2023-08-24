import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./App.css";
import Dashboard from "./Dashboard";

function App() {
  
  return (
    <div className="App">
        <div className="left-pane">
    <img src="images/side-bar.png"  alt="" />
        </div>
        <div className="right-pane">
        <Dashboard />
        </div>
    </div>
  );
}

export default App;
