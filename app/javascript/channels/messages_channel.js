import consumer from "channels/consumer"

consumer.subscriptions.create("MessagesChannel", {
  connected() {
    console.log("Connected")
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    console.log("Got a message here!")
    const messagesContainer = document.getElementById("messages");
    messagesContainer.insertAdjacentHTML("beforeend", data.html);
  }
});
