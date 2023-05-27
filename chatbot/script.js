const chatContainer = document.getElementById('chatContainer');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
  const userMessage = userInput.value;
  displayMessage(userMessage, 'user');
  proccesMessage(userMessage);
  userInput.value = '';
}

function displayMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);
  messageElement.textContent = message;
  chatContainer.appendChild(messageElement);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function proccesMessage() {
  // send the message to the chatbot service or handel it locally
  // receive and procces the chatbots response
  const botResponse = 'This is a dummy response from chatbot.';
  displayMessage(botResponse, 'bot');
  // Implemet any additional logic based on response
}