class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
          this.actionProvider.getAIResponse(message)
       
      }
    }

  
  export default MessageParser;