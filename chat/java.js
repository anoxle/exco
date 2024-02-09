const chatHistory = document.getElementById('chat-history');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');

// Create a variable to store current username
let username = "";

// Handle chat form submission
chatForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const message = chatInput.value;

    // Append the message to the chat history with formatting
    appendMessage(username, message);

    // Send the message to the server (your specific implementation goes here)

    // Clear the chat input field
    chatInput.value = '';
});

// Function to append a message to the chat history
function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');

    const senderElement = document.createElement('span');
    senderElement.classList.add('sender');
    senderElement.textContent = sender;
    messageElement.appendChild(senderElement);

    const messageTextElement = document.createElement('span');
    messageTextElement.classList.add('message');
    messageTextElement.textContent = message;

    // Handle formatting (bold, italics, code blocks)
    const textParts = message.split(/(\*\*|__|```)/);
    for (let i = 0; i < textParts.length; i++) {
        const textPart = textParts[i];
        if (textPart === '
