class Chatroom {
  constructor() {
    this.members = new Map();
    this.chatHistory = [];
    this.gameStarted = false;
  }
  
  broadcastMessage = (message) => {
    members.forEach(m => m.emit('message', message));
  };
  
  addToHistory = (message) => {
    chatHistory.push(message);
  }
  
  getChatHistory = () => {
    return chatHistory;
  }
  
  addUser = (newUser) => {
    if (this.members.size === 8) return {message: "room is full"};
    members.set(newUser.id, newUser);
    this.broadcastMessage("${}")
  }
  
  removeUser = (user) => {
    members.delete(user.id);
  }


}