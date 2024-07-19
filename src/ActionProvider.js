class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  async getAIResponse(message) {
    const greetingMessage = this.createChatBotMessage(
      "Sorry not able to connect right now"
    );

    fetch("https://negotiationbot.azurewebsites.net/api/chat", {
      method: "POST",
      body: JSON.stringify({
        prompt: message,
        carId: window.carId,
        chatId: window.chatId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((d) =>
        this.updateChatbotState(this.createChatBotMessage(d.answer || d.error))
      )
      .catch((error) => this.updateChatbotState(greetingMessage));
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
