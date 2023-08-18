class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    
    async getAIResponse( message) {
      const greetingMessage = this.createChatBotMessage("Hi, you have typed "+message)

    //   const response = await fetch(url, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },body: {"prompt":message}
    //   });
    // this.updateChatbotState(response.json().answer);
      this.updateChatbotState(greetingMessage)
    }
    
    updateChatbotState(message) {
   
  
      
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider