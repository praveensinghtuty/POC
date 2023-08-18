import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [createChatBotMessage(`Hello, you are looking at Jeep Compass for the price  of $11779. How can I help?`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#0A1A5E",
    },
    chatButton: {
      backgroundColor: "#0A1A5E",
    },
  },
}

export default config