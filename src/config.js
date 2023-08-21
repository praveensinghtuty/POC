import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "openlaneBot",
  initialMessages: [
    createChatBotMessage(
      `Hello, you are looking at ${window.carName}. How can I help?`
    ),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#0A1A5E",
    },
    chatButton: {
      backgroundColor: "#0A1A5E",
    },
  },
};

export default config;
