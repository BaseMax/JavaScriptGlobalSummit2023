// Create a WebSocket connection
const socket = new WebSocket('ws://localhost:8080');

// Event listener for when the connection is opened
socket.addEventListener('open', (event) => {
  console.log('Connected to WebSocket server');
});

// Event listener for messages from the server
socket.addEventListener('message', (event) => {
  console.log(`Received from server: ${event.data}`);
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
function sendMessage() {
  const message = document.getElementById('messageInput').value;
  console.log(message);
  socket.send(message);
}
