class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  async getAIResponse(message) {
    const greetingMessage = this.createChatBotMessage(
      "Sorry not able to connect right now"
    );
    try {
      const response = await fetch("http://localhost:8080/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { prompt: message },
      });
      this.updateChatbotState(response?.json()?.answer);
    } catch (error) {
      this.updateChatbotState(greetingMessage);
    }
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
