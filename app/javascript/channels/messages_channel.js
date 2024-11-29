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
      // Handle incoming broadcasted data
      const messagesContainer = document.getElementById("messages");
      const messageContainer = document.createElement("div");
      messageContainer.style = "margin-bottom:20px; background: powderblue; padding: 5px"
      const timeContainer = document.createElement("small");
      timeContainer.innerText= data.created_at
      //
      messageContainer.appendChild(timeContainer);
      const messageElement = document.createElement("p");
      messageElement.innerText = `${data.body}`;
      messageContainer.appendChild(messageElement)

      // <div style="margin-bottom:20px; background: turquoise; padding: 5px">
      // <small style="padding:0">
      //   <%= message.created_at.in_time_zone("Stockholm").strftime("%B %d, %Y %I:%M %p") %>
      // </small>
      // <p style="padding-left: 5px">
      //   <%= message.body %>
      // </p>
      
      messagesContainer.appendChild(messageContainer);

  }
});
