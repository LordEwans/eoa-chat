const sendMessage = () => {
  let message = document.querySelector(".chat-input-input textarea").value;
  console.log(message);
  message = message.trim();
  const button = document.getElementById("btn0");
  button.classList.add("active");
  setTimeout(() => button.classList.remove("active"), 140);
  if (message === "") return;
  document.querySelector(".chat-input-input textarea").value = "";
  document.querySelector(".chat-input-input textarea").focus();

  let messageElement = document.createElement("div");
  messageElement.classList.add("chat-box-message");
  messageElement.innerHTML = `
    <div class="chat-box-message-text2">${message}</div>
    `;
  const chatBox = document.querySelector(".chat-box");
  chatBox.appendChild(messageElement);

  // Scroll to the bottom of the chat box to show the new message
  chatBox.scrollTop = chatBox.scrollHeight;
};

const loadMessages = (messages) => {
  const chatBox = document.querySelector(".chat-box");
  messages.forEach((message) => {
    let messageElement = document.createElement("div");
    messageElement.classList.add("chat-box-message");
    if (message.role === "user") {
      messageElement.innerHTML = `
      <div class="chat-box-message-text2">${message.body}</div>
    `;
    } else {
      messageElement.innerHTML = `
        <div class="chat-box-message-text1">${message.body}</div>
      `;
    }
    chatBox.appendChild(messageElement);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".chat-input-input textarea").focus();
  const textarea = document.querySelector(".chat-input-input textarea");

  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const button = document.getElementById("btn0");
      button.classList.add("active");
      setTimeout(() => button.classList.remove("active"), 140);
      sendMessage();
    }
  });
});
