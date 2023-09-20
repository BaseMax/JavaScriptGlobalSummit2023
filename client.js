const socket = new WebSocket('ws://localhost:8080');

const messageList = document.getElementById('messageList');
const messageInput = document.getElementById('messageInput');

socket.addEventListener('open', (event) => {
  console.log('Connected to WebSocket server');
});

socket.addEventListener('message', (event) => {
  console.log(`Received from server: ${event.data}`);

  appendToList(event.data);
});

socket.addEventListener('close', (event) => {
  if (event.wasClean) {
    console.log('Connection closed cleanly');
  } else {
    console.error('Connection abruptly closed');
  }
});

socket.addEventListener('error', (event) => {
  console.error('WebSocket error:', event);
});

function appendToList(message) {
  const listItem = document.createElement('li');
  listItem.textContent = message;

  messageList.appendChild(listItem);

  messageList.scrollTop = messageList.scrollHeight;
}

function sendMessage() {
  const message = messageInput.value;
  socket.send(message);

  messageInput.value = '';

  appendToList(message);
}
