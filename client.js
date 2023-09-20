// Create a WebSocket connection
const socket = new WebSocket('ws://localhost:8080');

// Get references to the message list and input field
const messageList = document.getElementById('messageList');
const messageInput = document.getElementById('messageInput');

// Event listener for when the connection is opened
socket.addEventListener('open', (event) => {
  console.log('Connected to WebSocket server');
});

// Event listener for messages from the server
socket.addEventListener('message', (event) => {
  console.log(`Received from server: ${event.data}`);

  appendToList(event.data);
});

// Event listener for when the connection is closed
socket.addEventListener('close', (event) => {
  if (event.wasClean) {
    console.log('Connection closed cleanly');
  } else {
    console.error('Connection abruptly closed');
  }
});

// Event listener for connection errors
socket.addEventListener('error', (event) => {
  console.error('WebSocket error:', event);
});

// Send a message to the server
function appendToList(message) {
  // Create a new list item to display the message
  const listItem = document.createElement('li');
  listItem.textContent = message;

  // Append the list item to the message list
  messageList.appendChild(listItem);

  // Scroll to the bottom of the message list to show the latest message
  messageList.scrollTop = messageList.scrollHeight;
}
function sendMessage() {
  const message = messageInput.value;
  socket.send(message);

  // Clear the input field after sending the message
  messageInput.value = '';

  appendToList(message);
}
